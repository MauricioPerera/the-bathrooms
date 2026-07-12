// maze-core — nucleo determinista del laberinto infinito de "The Bathrooms".
// ESM puro, cero dependencias, sin DOM, sin Math.random ni Date.now.
// Contrato: knowledge/contracts/maze-core.md

const DEFAULT_SIZE = 18; // multiplo del periodo de bloque (6)
const PERIOD = 6;        // toda celda con wx%6===0 o wz%6===0 es corredor
const SKIN = 1e-3;       // holgura de colision para que el disco no toque la pared

// --- utilidades puras -------------------------------------------------------

function mod(n, m) { return ((n % m) + m) % m; }

// hash entero determinista de (seed, a, b) -> uint32
function hash3(seed, a, b) {
  let h = (seed | 0) ^ 0x9e3779b9;
  h = Math.imul(h ^ (a | 0), 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h ^ (b | 0), 0xc2b2ae35);
  h ^= h >>> 16;
  h = Math.imul(h ^ 0x27d4eb2d, 0x165667b1);
  h ^= h >>> 15;
  return h >>> 0;
}

// clasifica el bloque 5x5 (bx,bz) de forma determinista.
// cellType: 0=macizo/pared, 1=abierto, 2=cubiculos, 3=lavabos, 4=inundado.
function classifyBlock(seed, bx, bz) {
  const h = hash3(seed, bx, bz);
  const sel = h % 20;
  let cellType, kind;
  if (sel <= 8) { cellType = 0; kind = 'solid'; }        // 45% macizo (paredes con props)
  else if (sel <= 12) { cellType = 2; kind = 'cubicle'; } // 20% sala de cubiculos
  else if (sel <= 15) { cellType = 3; kind = 'sink'; }    // 15% sala de lavabos
  else if (sel <= 17) { cellType = 4; kind = 'flooded'; } // 10% inundada
  else { cellType = 1; kind = 'open'; }                   // 10% pasillo abierto
  const style = ((h / 20) | 0) % 4;
  return { h, cellType, kind, style };
}

// tipo de celda mundial (entero). Fuente de verdad de caminabilidad.
function worldCell(seed, wx, wz) {
  if (mod(wx, PERIOD) === 0 || mod(wz, PERIOD) === 0) return 1; // reticula de corredores
  const bx = Math.floor(wx / PERIOD);
  const bz = Math.floor(wz / PERIOD);
  return classifyBlock(seed, bx, bz).cellType;
}

// --- API --------------------------------------------------------------------

export function isWalkable(seed, wx, wz) {
  return worldCell(seed | 0, Math.floor(wx), Math.floor(wz)) !== 0;
}

export function generateChunk(seed, cx, cz, opts) {
  seed = seed | 0; cx = cx | 0; cz = cz | 0;
  const size = (opts && opts.chunkSize) || DEFAULT_SIZE;

  const cells = new Array(size * size);
  for (let dz = 0; dz < size; dz++) {
    for (let dx = 0; dx < size; dx++) {
      cells[dz * size + dx] = worldCell(seed, cx * size + dx, cz * size + dz);
    }
  }

  const props = [];
  const lights = [{ x: 0, z: 0 }];              // luz garantizada sobre corredor (0,0)
  const puddles = [{ x: PERIOD, z: 0, r: 0.35 }]; // charco garantizado sobre corredor

  const nb = Math.floor(size / PERIOD); // bloques por eje dentro del chunk
  for (let jz = 0; jz < nb; jz++) {
    for (let jx = 0; jx < nb; jx++) {
      const bx = cx * nb + jx;
      const bz = cz * nb + jz;
      fillBlock(seed, bx, bz, jx * PERIOD, jz * PERIOD, props, lights, puddles);
    }
  }

  return { cx, cz, size, cells, props, lights, puddles };
}

// genera props/luces/charcos de un bloque; baseX/baseZ = origen local del bloque.
function fillBlock(seed, bx, bz, baseX, baseZ, props, lights, puddles) {
  const info = classifyBlock(seed, bx, bz);
  const cx = baseX + 3, cz = baseZ + 3; // centro local del bloque
  if (info.kind === 'solid') {
    // fila contigua de props de pared a lo largo del muro -z (celdas NO caminables,
    // frente hacia el corredor en -z => rot 2). Estilo variable por bloque.
    for (let lx = 1; lx <= 5; lx++) {
      const type = wallPropType(info.style, lx);
      props.push({ x: baseX + lx, z: baseZ + 1, type, rot: 2 });
    }
    return;
  }
  // salas caminables: luz al centro, y props sueltos sobre celdas caminables.
  lights.push({ x: cx, z: cz });
  if (info.kind === 'flooded') {
    const r = 0.2 + (info.h % 40) / 100; // (0.15, 0.6]
    puddles.push({ x: cx, z: cz, r });
    puddles.push({ x: baseX + 2, z: baseZ + 2, r: 0.25 });
  } else {
    props.push({ x: cx, z: cz, type: 'bin', rot: 0 });
    if (info.kind === 'open') props.push({ x: baseX + 2, z: baseZ + 2, type: 'pipes', rot: 0 });
  }
}

function wallPropType(style, lx) {
  if (style === 0) return 'stall';
  if (style === 1) return (lx % 2 === 0) ? 'sink' : 'mirror'; // apareados
  if (style === 2) return 'urinal';
  return 'dispenser';
}

export function chunksInRadius(px, pz, r, opts) {
  const size = (opts && opts.chunkSize) || DEFAULT_SIZE;
  const centerCx = Math.floor(px / size);
  const centerCz = Math.floor(pz / size);
  const R = Math.max(0, Math.ceil(r));
  const out = [];
  for (let dz = -R; dz <= R; dz++) {
    for (let dx = -R; dx <= R; dx++) {
      out.push({ cx: centerCx + dx, cz: centerCz + dz });
    }
  }
  return out;
}

// --- colision ---------------------------------------------------------------

// ¿el disco (centro x,z, radio R) invade alguna celda no caminable?
function diskHitsWall(seed, x, z, R) {
  const minX = Math.floor(x - R), maxX = Math.floor(x + R);
  const minZ = Math.floor(z - R), maxZ = Math.floor(z + R);
  for (let cz = minZ; cz <= maxZ; cz++) {
    for (let cx = minX; cx <= maxX; cx++) {
      if (worldCell(seed, cx, cz) !== 0) continue; // caminable
      const nx = Math.max(cx, Math.min(x, cx + 1));
      const nz = Math.max(cz, Math.min(z, cz + 1));
      const ddx = x - nx, ddz = z - nz;
      if (ddx * ddx + ddz * ddz < R * R) return true;
    }
  }
  return false;
}

// desliza sobre un solo eje por sub-pasos (evita tunel) dejando holgura SKIN.
function slideAxis(seed, x, z, d, R, isX) {
  let cur = isX ? x : z;
  if (d === 0) return cur;
  const other = isX ? z : x;
  const guard = R + SKIN;
  const stepLen = Math.max(1e-3, R * 0.5);
  const steps = Math.max(1, Math.ceil(Math.abs(d) / stepLen));
  const inc = d / steps;
  for (let i = 0; i < steps; i++) {
    const next = cur + inc;
    const nx = isX ? next : other;
    const nz = isX ? other : next;
    if (diskHitsWall(seed, nx, nz, guard)) break;
    cur = next;
  }
  return cur;
}

export function resolveMovement(seed, pos, delta, radius, opts) {
  seed = seed | 0;
  const R = radius;
  let x = pos.x, z = pos.z;
  x = slideAxis(seed, x, z, delta.x, R, true);  // primero X
  z = slideAxis(seed, x, z, delta.z, R, false); // luego Z (deslizamiento)
  return { x, z };
}
