// audio.mjs — paisaje sonoro 100% sintetizado (WebAudio), sin assets.
// Capas continuas (drip, hum electrico, tuberias graves) + eventos puntuales de
// scheduleAmbientEvents (flush, dryer, stall_noise, pipe_knock) espacializados con
// attenuation (mas cerca = mas fuerte) y pan estereo por direccion. Footsteps al andar.
import { scheduleAmbientEvents, attenuation } from './fx-logic.mjs';

const SEED = 20240711; // seed fija del scheduler ambiental

function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

// buffer de ruido blanco (Math.random permitido: ruido audiovisual no persistente)
function noiseBuffer(ctx, seconds) {
  const n = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < n; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function noiseSource(ctx, seconds) {
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer(ctx, seconds);
  return src;
}

// nodo de espacializacion: gain (atenuacion) -> panner (direccion) -> master
function spatial(A, gain, pan) {
  const g = A.ctx.createGain();
  g.gain.value = gain;
  const p = A.ctx.createStereoPanner();
  p.pan.value = clamp(pan, -1, 1);
  g.connect(p);
  p.connect(A.master);
  return g;
}

// --- capas continuas --------------------------------------------------------

function startHum(A) {
  const g = A.ctx.createGain();
  g.gain.value = 0.03;
  [60, 120, 180].forEach((f, i) => {
    const o = A.ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.value = f;
    const og = A.ctx.createGain();
    og.gain.value = 0.5 / (i + 1);
    o.connect(og);
    og.connect(g);
    o.start();
  });
  g.connect(A.master);
  A.humGain = g; // el motor modula por cercania de luces (hum)
}

function startPipe(A) {
  const src = noiseSource(A.ctx, 3);
  src.loop = true;
  const lp = A.ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 90;
  const g = A.ctx.createGain();
  g.gain.value = 0.12;
  src.connect(lp);
  lp.connect(g);
  g.connect(A.master);
  src.start();
}

// drip: goteo puntual (ping tonal con caida rapida + salpicadura filtrada)
function drip(A, when, gain, pan) {
  const out = spatial(A, gain, pan);
  const o = A.ctx.createOscillator();
  o.type = 'sine';
  o.frequency.setValueAtTime(1400 + Math.random() * 700, when);
  o.frequency.exponentialRampToValueAtTime(600, when + 0.08);
  const eg = A.ctx.createGain();
  eg.gain.setValueAtTime(0.0001, when);
  eg.gain.exponentialRampToValueAtTime(0.9, when + 0.004);
  eg.gain.exponentialRampToValueAtTime(0.0001, when + 0.14);
  o.connect(eg);
  eg.connect(out);
  o.start(when);
  o.stop(when + 0.16);
}

function maybeDrip(A, tMs) {
  if (tMs < A.nextDrip) return;
  A.nextDrip = tMs + 450 + Math.random() * 2400;
  const pan = Math.random() * 2 - 1;
  drip(A, A.ctx.currentTime + 0.02, 0.5, pan);
}

// --- eventos puntuales ------------------------------------------------------

// flush: ruido de banda ancha con barrido descendente (~4s)
function flush(A, when, gain, pan) {
  const out = spatial(A, gain, pan);
  const src = noiseSource(A.ctx, 4.2);
  const bp = A.ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.Q.value = 0.9;
  bp.frequency.setValueAtTime(1600, when);
  bp.frequency.exponentialRampToValueAtTime(180, when + 4.0);
  const eg = A.ctx.createGain();
  eg.gain.setValueAtTime(0.0001, when);
  eg.gain.linearRampToValueAtTime(0.8, when + 0.3);
  eg.gain.setValueAtTime(0.8, when + 3.2);
  eg.gain.exponentialRampToValueAtTime(0.0001, when + 4.2);
  src.connect(bp);
  bp.connect(eg);
  eg.connect(out);
  src.start(when);
  src.stop(when + 4.3);
}

// dryer: rugido subito (ruido + lowpass, ataque corto, 8-10s)
function dryer(A, when, gain, pan) {
  const out = spatial(A, gain, pan);
  const src = noiseSource(A.ctx, 9.5);
  const lp = A.ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 700;
  lp.Q.value = 1.2;
  const eg = A.ctx.createGain();
  eg.gain.setValueAtTime(0.0001, when);
  eg.gain.linearRampToValueAtTime(0.9, when + 0.12); // ataque corto
  eg.gain.setValueAtTime(0.9, when + 8.4);
  eg.gain.exponentialRampToValueAtTime(0.0001, when + 9.4);
  src.connect(lp);
  lp.connect(eg);
  eg.connect(out);
  src.start(when);
  src.stop(when + 9.5);
}

// stall_noise: golpes/crujidos apagados (varios bursts lowpass)
function stall_noise(A, when, gain, pan) {
  const out = spatial(A, gain, pan);
  for (let i = 0; i < 3; i++) {
    const t = when + i * (0.18 + Math.random() * 0.22);
    const src = noiseSource(A.ctx, 0.2);
    const lp = A.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 320;
    const eg = A.ctx.createGain();
    eg.gain.setValueAtTime(0.0001, t);
    eg.gain.exponentialRampToValueAtTime(0.7, t + 0.01);
    eg.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
    src.connect(lp);
    lp.connect(eg);
    eg.connect(out);
    src.start(t);
    src.stop(t + 0.2);
  }
}

// pipe_knock: knocks metalicos (triangulo con caida rapida, un par de golpes)
function pipe_knock(A, when, gain, pan) {
  const out = spatial(A, gain, pan);
  for (let i = 0; i < 2; i++) {
    const t = when + i * 0.16;
    const o = A.ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(220 - i * 40, t);
    o.frequency.exponentialRampToValueAtTime(90, t + 0.09);
    const eg = A.ctx.createGain();
    eg.gain.setValueAtTime(0.0001, t);
    eg.gain.exponentialRampToValueAtTime(0.8, t + 0.005);
    eg.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(eg);
    eg.connect(out);
    o.start(t);
    o.stop(t + 0.2);
  }
}

const EVENT_SYNTH = { flush, dryer, stall_noise, pipe_knock };

// consumir la ventana deslizante de scheduleAmbientEvents y agendar cada evento a su hora
function pump(A, tMs) {
  const t1 = tMs + 1500; // lookahead 1.5s
  if (t1 <= A.cursor) return;
  const evs = scheduleAmbientEvents(SEED, A.cursor, t1);
  for (const e of evs) {
    const when = A.ctx.currentTime + Math.max(0, (e.t - tMs) / 1000);
    const dist = Math.hypot(e.dx, e.dz);
    const gain = attenuation(dist, A.ref, A.max);
    if (gain <= 0) continue;
    const pan = e.dx / (dist || 1);
    const fn = EVENT_SYNTH[e.type];
    if (fn) fn(A, when, gain, pan);
  }
  A.cursor = t1;
}

// footstep: pisada seca, o chapoteo si hay agua/charco cerca
function footstep(A, splash) {
  const when = A.ctx.currentTime + 0.01;
  const out = spatial(A, splash ? 0.5 : 0.3, 0);
  const src = noiseSource(A.ctx, 0.16);
  const f = A.ctx.createBiquadFilter();
  f.type = splash ? 'bandpass' : 'lowpass';
  f.frequency.value = splash ? 1200 : 240;
  const eg = A.ctx.createGain();
  eg.gain.setValueAtTime(0.0001, when);
  eg.gain.exponentialRampToValueAtTime(0.8, when + 0.008);
  eg.gain.exponentialRampToValueAtTime(0.0001, when + (splash ? 0.22 : 0.11));
  src.connect(f);
  f.connect(eg);
  eg.connect(out);
  src.start(when);
  src.stop(when + 0.24);
}

export function createAudio(GAME) {
  const A = {
    ctx: null, master: null, humGain: null, started: false,
    cursor: 0, nextDrip: 0,
    ref: GAME.platform.audio.refDist, max: GAME.platform.audio.maxDist,
  };

  function start() {
    if (A.started) return;
    A.started = true;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    A.ctx = new Ctx();
    A.master = A.ctx.createGain();
    A.master.gain.value = 0.55;
    A.master.connect(A.ctx.destination);
    if (A.ctx.state === 'suspended') A.ctx.resume();
    startHum(A);
    startPipe(A);
    A.cursor = performance.now();
    A.nextDrip = A.cursor;
  }

  // humLevel 0..1 = intensidad de la luz mas cercana (el zumbido sigue a las luces)
  function update(tMs, humLevel) {
    if (!A.started) return;
    if (A.humGain) A.humGain.gain.setTargetAtTime(0.015 + 0.06 * (humLevel || 0), A.ctx.currentTime, 0.25);
    pump(A, tMs);
    maybeDrip(A, tMs);
  }

  function step(splash) {
    if (A.started) footstep(A, splash);
  }

  return { start, update, footstep: step };
}
