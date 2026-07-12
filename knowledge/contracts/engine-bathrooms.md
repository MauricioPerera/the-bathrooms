---
type: 'Task Contract'
title: 'Motor 3D primera persona de The Bathrooms (Three.js + VHS + WebAudio)'
description: 'Motor navegable en primera persona sobre Three.js vendoreado: streaming de chunks del laberinto, render low-poly desde los datos del protocolo, luces fluorescentes parpadeantes, charcos reflectantes, post-proceso VHS y paisaje sonoro WebAudio 100% sintetizado.'
tags: ['bathrooms', 'engine', 'three', 'vhs', 'webaudio', 'game']

task: engine-bathrooms
intent: "Integrar maze-core, fx-logic y los datos del protocolo en un juego navegable offline con tratamiento VHS y audio procedural."
target: src/game/engine.mjs
signature: "function startGame(opts)"
test_command: "node --test tests/game/engine.test.mjs"
budget:
  max_cyclomatic_complexity: 14
  max_nesting_depth: 4
tests: "tests/game/engine.test.mjs"
tests_sha256: "d9e9d9f7db235fce64980307453d3fb5678b4f21114881873c155c300defec6f"
touch_only: ['src/game/engine.mjs', 'src/game/vhs.mjs', 'src/game/audio.mjs', 'src/game/main.mjs', 'src/game/index.html']
deps_allowed: ['three (SOLO via importmap al vendoreado ../../vendor/three/three.module.js)']
forbids: ['network', 'CDNs', 'assets binarios', 'editar vendor/', 'editar src/game/maze-core.mjs', 'editar src/game/fx-logic.mjs', 'editar src/game/GAME.md', 'editar los tests congelados']
---

# Contract: engine-bathrooms

## Intent
La experiencia completa de The Bathrooms: caminar en primera persona por un laberinto
infinito de banos publicos decadentes, visto a traves de una videocamara VHS vieja, con
un paisaje sonoro ambiental sintetizado. Atmosfera pura: SIN objetivos, SIN combate,
SIN enemigos. El jugador solo camina, mira y se pierde.

## Interface
Archivos (perimetro completo en `touch_only`):
- `src/game/index.html` — pagina autocontenida OFFLINE: importmap `"three"` ->
  `../../vendor/three/three.module.js`, `<script src="game-data.generated.js">`
  (window.GAME del protocolo), `<script type="module" src="main.mjs">`, overlay inicial
  "click para entrar" (pointer lock + AudioContext requieren gesto de usuario).
- `src/game/main.mjs` — bootstrap: lee `window.GAME`, llama `startGame(...)`.
- `src/game/engine.mjs` — `export function startGame(opts)`: escena Three.js, streaming
  de chunks (usar `chunksInRadius`/`generateChunk` de `./maze-core.mjs` con la seed y
  knobs de `GAME.platform`), construccion de mallas low-poly, camara en primera persona
  (WASD + mouse con `requestPointerLock`, colision via `resolveMovement`), luces con
  `lightState` de `./fx-logic.mjs`, charcos, niebla, loop de render.
- `src/game/vhs.mjs` — tratamiento VHS: fullscreen shader pass (scanlines, grano,
  aberracion/tracking, vignette) + overlay 2D (timestamp de `fx-logic.vhsTimestamp`,
  simbolo REC parpadeante, "PLAY" o marco camcorder). Identificadores en el fuente:
  `scanline`, `grain`, `tracking`, `vignette` (el oraculo los busca).
- `src/game/audio.mjs` — WebAudio 100% procedural (osciladores, ruido por
  `AudioBuffer` generado, filtros): capas ambientales continuas (goteo `drip`, zumbido
  electrico `hum`, tuberias) + eventos puntuales de `scheduleAmbientEvents` con tipos
  `flush`, `dryer`, `stall_noise`, `pipe_knock`, espacializados con `attenuation`
  (mas cerca = mas fuerte; usar panner o ganancia+pan por posicion relativa).

## Invariants
- **Offline total**: ninguna URL `http(s)://` en los 5 archivos; unico import externo:
  `three` via importmap local. Sin assets binarios (todo el audio sintetizado, toda la
  geometria de datos del protocolo o generada).
- **Datos del protocolo**: los materiales/colores salen de `GAME.MATERIALS`; el
  mobiliario se instancia desde `GAME.VOXELS` (adaptar
  `vendor/game-protocol/adapters/three-voxel.js` esta permitido COPIANDO su logica o
  importandolo, sin editarlo; escala voxel = 0.25m). Knobs de `GAME.platform`
  (velocidad, radio, altura de ojo, viewChunks, audio) NO se hardcodean.
- **Mundo**: seed fija del juego (constante en engine.mjs esta bien); chunks se crean al
  acercarse y se descartan al alejarse (viewChunks); paredes/piso/techo con materiales
  de azulejo sucio; puddles como planos reflectivos/brillantes que captan las luces;
  niebla densa que oculta el fin del mundo cargado.
- **Iluminacion enfermiza**: fluorescentes amarillentos de `light_fixture` por celda de
  luz del chunk; intensidad por frame desde `lightState` (muertas = zonas oscuras);
  luz ambiente MUY baja; el flicker debe notarse en paredes y charcos.
- **Rendimiento**: InstancedMesh (o merge) para voxels y paredes por chunk — nunca un
  Mesh por voxel; presupuesto de drawcalls acotado por chunk. Debe correr fluido con
  viewChunks=1..2 en una GPU integrada.
- **VHS legible**: el mundo se ve SIEMPRE a traves del pase VHS (nada de toggle);
  timestamp avanza en tiempo real; REC parpadea ~1Hz.
- **Audio**: arranca tras el gesto del usuario; goteo constante irritante; eventos se
  oyen mas fuerte al acercarse a su offset; secador = rugido subito con ataque corto.
- **Determinismo del mundo**: la generacion (posiciones, chunks, layout) usa SOLO la
  seed via maze-core/fx-logic. `Math.random` permitido UNICAMENTE para texturas de
  ruido audiovisual no persistente (grano VHS, buffer de ruido de audio).

## Examples
- Abrir `src/game/index.html` servido localmente => overlay con titulo y hint de
  `GAME.platform.texts`; click => pointer lock, audio arranca, HUD VHS visible
  (REC + timestamp), y el jugador camina con WASD por corredores de azulejos con
  cubiculos, lavabos con espejos, charcos y luces que parpadean.
- Caminar 200m en cualquier direccion => el mundo sigue (streaming), sin caidas al
  vacio ni paredes que encierren.

## Do / Don't
- DO: fog + far plane cortos (claustrofobia y rendimiento); techo bajo (wallHeight).
- DO: reusar geometrias/materiales entre chunks (cache por tipo, dispose al descargar).
- DO: charcos con `MeshStandardMaterial` metalico/liso o Reflector simple — basta con
  que "capten" las luces parpadeantes.
- DON'T: gameplay (items, enemigos, puntos): atmosfera pura.
- DON'T: postprocesado de la libreria `three/addons` (no esta vendoreado): el pase VHS
  se hace con render-to-target + quad con ShaderMaterial propio, o shader inyectado.
- DON'T: editar maze-core.mjs, fx-logic.mjs, GAME.md, vendor/ ni los tests congelados.
  Si un test parece mal, PARA y reportalo.

## Tests
Oraculo congelado en `tests/game/engine.test.mjs` (sellado por `tests_sha256`):
estructura de archivos, offline total, cableado del importmap/artefacto/main, imports y
exports del engine, tokens de efectos VHS, sintesis WebAudio sin assets y carga de los
modulos previos. La calidad visual/sonora la verifica el PM end-to-end en navegador.
Correr: `node --test tests/game/engine.test.mjs` (desde la raiz del repo).

## Constraints
- Node >= 18 para los tests; el juego corre en navegador moderno (ESM + importmap).
- Sin dependencias nuevas; sin red; presupuesto informativo: ciclomatica <= 14 por
  funcion, anidado <= 4.
- Perimetro: SOLO los 5 archivos de `touch_only`.
- PARAR y reportar si un test congelado parece incorrecto, si falta capacidad en three vendoreado, o si el contrato es inviable.
