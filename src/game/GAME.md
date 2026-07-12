---
version: "0.1"
name: The Bathrooms
profile: voxel
description: "Mundo liminal de baños infinitos capturado en VHS: azulejos enfermizos, moho, luz fluorescente muerta. Sin objetivos, sin salida."
platform:
  chunkSize: 18
  cellSize: 2
  wallHeight: 3
  playerSpeed: 3.4
  playerRadius: 0.3
  viewChunks: 2
  eyeHeight: 1.6
  audio: { refDist: 4, maxDist: 28 }
  texts: { title: "The Bathrooms", rec: "REC", hint: "WASD para caminar, mouse para mirar, Shift para correr" }
materials:
  TILE_WALL: { color: [196, 202, 176] }
  TILE_FLOOR: { color: [174, 172, 148] }
  GROUT: { color: [86, 84, 70] }
  STALL: { color: [150, 158, 138] }
  PORCELAIN: { color: [212, 208, 192] }
  MIRROR: { color: [126, 148, 146] }
  WATER: { color: [98, 118, 108] }
  MOLD: { color: [58, 72, 50] }
  GRIME: { color: [94, 84, 68] }
  CEILING: { color: [198, 194, 172] }
  LIGHT_ON: { color: [228, 224, 176] }
  LIGHT_DEAD: { color: [118, 120, 116] }
  PAPER: { color: [204, 200, 186] }
  PIPE: { color: [108, 110, 106] }
  METAL: { color: [126, 128, 126] }
  TRASH: { color: [78, 74, 62] }
prefabs:
  wall_slab: { size: [8, 9, 1], fill: TILE_WALL }
  floor_slab: { size: [8, 1, 8], fill: TILE_FLOOR }
  ceiling_slab: { size: [8, 1, 8], fill: CEILING }
  stall_side: { size: [1, 9, 8], fill: STALL }
  stall_back: { size: [8, 9, 1], fill: STALL }
  stall_door: { size: [6, 8, 1], fill: STALL }
  toilet_base: { size: [4, 3, 4], fill: PORCELAIN }
  toilet_seat: { size: [4, 1, 4], fill: PORCELAIN }
  sink_basin: { size: [5, 2, 4], fill: PORCELAIN }
  mirror_panel: { size: [5, 5, 1], fill: MIRROR, cells: [{ x: 0, y: 0, z: 0, m: MOLD }, { x: 4, y: 0, z: 0, m: MOLD }, { x: 0, y: 4, z: 0, m: MOLD }, { x: 4, y: 4, z: 0, m: MOLD }] }
  pipe_segment: { size: [1, 4, 1], fill: PIPE }
  grime_patch: { size: [2, 1, 1], fill: GRIME }
  water_puddle: { size: [4, 1, 4], fill: WATER }
  urinal_bowl: { size: [3, 5, 2], fill: PORCELAIN }
  bin_body: { size: [3, 4, 3], fill: METAL }
  paper_wad: { size: [1, 1, 1], fill: PAPER }
  dispenser_box: { size: [2, 3, 1], fill: METAL }
  light_tube: { size: [6, 1, 1], fill: LIGHT_ON }
  light_tube_dead: { size: [6, 1, 1], fill: LIGHT_DEAD }
structures:
  stall_unit:
    place: [{ prefab: floor_slab, at: [0, 0, 0] }, { prefab: stall_side, at: [0, 1, 0] }, { prefab: stall_side, at: [7, 1, 0] }, { prefab: stall_back, at: [0, 1, 7] }, { prefab: stall_door, at: [1, 1, 1] }, { prefab: toilet_base, at: [2, 1, 3] }, { prefab: toilet_seat, at: [2, 4, 3] }, { prefab: water_puddle, at: [2, 1, 1] }]
  sink_unit:
    place: [{ prefab: sink_basin, at: [0, 3, 0] }, { prefab: mirror_panel, at: [0, 6, 0] }, { prefab: pipe_segment, at: [1, 0, 1] }, { prefab: pipe_segment, at: [3, 0, 1] }, { prefab: grime_patch, at: [1, 3, 0] }]
  urinal_unit:
    place: [{ prefab: wall_slab, at: [0, 0, 2] }, { prefab: urinal_bowl, at: [1, 2, 0] }, { prefab: pipe_segment, at: [2, 0, 0] }, { prefab: pipe_segment, at: [2, 6, 0] }, { prefab: grime_patch, at: [1, 1, 0] }]
  bin_full:
    place: [{ prefab: bin_body, at: [1, 0, 1] }, { prefab: paper_wad, at: [1, 4, 1] }, { prefab: paper_wad, at: [2, 4, 2] }, { prefab: paper_wad, at: [3, 4, 3] }, { prefab: paper_wad, at: [0, 1, 2] }, { prefab: paper_wad, at: [5, 2, 2] }, { prefab: paper_wad, at: [2, 0, 5] }, { prefab: paper_wad, at: [3, 3, 0] }]
  dispenser_empty:
    place: [{ prefab: dispenser_box, at: [0, 2, 0] }, { prefab: grime_patch, at: [0, 1, 0] }]
  light_fixture:
    place: [{ prefab: ceiling_slab, at: [0, 1, 0] }, { prefab: light_tube, at: [1, 0, 2] }, { prefab: light_tube_dead, at: [1, 0, 4] }]
---

## Overview

**The Bathrooms** es un mundo liminal: una red de aseos públicos que no termina
nunca. No hay objetivos, no hay puntuación, no hay salida. Solo caminás por
pasillos de azulejo bajo tubos fluorescentes que zumban, algunos muertos, y todo
se ve como una cinta VHS de tercera generación: grano, sangrado de color, la
palabra `REC` temblando en una esquina.

Este documento es la fuente de verdad del **contenido** del juego (perfil `voxel`
del GAME Protocol): materiales, piezas voxel reutilizables (`prefabs`) y el
mobiliario del baño compuesto por referencia (`structures`). El motor 3D consume
el artefacto compilado `game-data.generated.js` (`window.GAME`), nunca este `.md`.
El trazado del laberinto infinito y el render son de otros contratos: acá no hay
lógica, solo datos.

Escala voxel: **8 voxeles = 1 celda = 2 m**, es decir **1 voxel = 0,25 m**. Las
estructuras se mantienen por debajo de 24 voxeles por eje (unas 3 celdas), lo
justo para una pieza de mobiliario.

Knobs de `platform`: mundo en chunks de 18 celdas, paso de jugador contenido
(3,4 m/s) y vista corta (2 chunks) para reforzar el encierro; audio con caída de
4 a 28 m para que el goteo y el zumbido se pierdan a la vuelta de cada esquina.

## Materials

Paleta deliberadamente **enferma y desaturada**. Nada alegre, nada saturado: es la
luz fluorescente amarillenta rebotando sobre superficies sucias.

- `TILE_WALL` / `TILE_FLOOR`: azulejo pálido amarillento-verdoso, ya cansado.
- `GROUT`: la lechada entre azulejos, oscurecida por años de mugre.
- `STALL`: la chapa/partición de los cubículos, verde institucional apagado.
- `PORCELAIN`: blanco roto y manchado de tazas, lavabos y urinarios.
- `MIRROR`: cristal turbio verdoso; refleja mal a propósito.
- `WATER`: agua estancada, turbia, ni azul ni limpia.
- `MOLD`: moho verde-negro que trepa por esquinas y juntas.
- `GRIME`: churretes marrón-grises que bajan de grifos y dispensadores.
- `CEILING`: plafón amarilleado por la nicotina de la luz.
- `LIGHT_ON` / `LIGHT_DEAD`: tubo encendido (amarillo enfermo) y tubo muerto (gris).
- `PAPER`: papel higiénico/toallas apelmazadas, blanco sucio.
- `PIPE` / `METAL` / `TRASH`: cañerías corroídas, chapa mate y desperdicio oscuro.

## Prefabs

Piezas voxel reutilizables, cada una con `size: [w, h, d]` entero y relleno `fill`
(o `cells` para detalles). Se combinan por referencia en `structures` para no
redibujar geometría:

- Superficies: `wall_slab`, `floor_slab`, `ceiling_slab`.
- Cubículo: `stall_side`, `stall_back`, `stall_door`, `toilet_base`, `toilet_seat`.
- Lavabo: `sink_basin`, `mirror_panel` (con esquinas `MOLD` vía `cells`), `pipe_segment`.
- Suciedad y agua: `grime_patch`, `water_puddle`.
- Otros: `urinal_bowl`, `bin_body`, `paper_wad`, `dispenser_box`,
  `light_tube`, `light_tube_dead`.

## Structures

Composiciones por referencia (`place`: prefab + offset `at`). El motor instancia
cada una por su nombre exacto:

- `stall_unit`: cubículo cerrado — dos paredes `stall_side`, `stall_back`, una
  `stall_door` entreabierta e insertada, taza `PORCELAIN` (`toilet_base` +
  `toilet_seat`) y un charco `water_puddle` turbio en el piso.
- `sink_unit`: lavabo `PORCELAIN` montado, `mirror_panel` con moho en las
  esquinas, cañerías `pipe_segment` debajo y un churrete `grime_patch`.
- `urinal_unit`: urinario `PORCELAIN` contra un `wall_slab`, cañería de entrada y
  de descarga, mugre bajando por la pared.
- `bin_full`: papelera `bin_body` desbordada, con `paper_wad` amontonados encima y
  derramados alrededor por el piso.
- `dispenser_empty`: dispensador `dispenser_box` vacío, con un churrete de
  `grime_patch` seco debajo.
- `light_fixture`: plafón `ceiling_slab` con un tubo `light_tube` encendido y otro
  `light_tube_dead` al lado — la mitad de la luz siempre está muerta.

## Do's and Don'ts

- **DO** reusar prefabs dentro de `structures` por referencia: esa es la gracia del
  perfil voxel (una taza, un tubo, un charco definidos una vez y colocados muchas).
- **DO** mantener la dirección de arte liminal: superficies sucias, luz enferma,
  cero color alegre o saturado. Si un material se ve "limpio", está mal.
- **DO** respetar el subset YAML del protocolo: listas de flujo en una línea y comas
  dentro de texto siempre entre comillas (ver `texts.hint`).
- **DON'T** meter lógica en los datos: el laberinto infinito, la cámara, el filtro
  VHS y el `REC` parpadeante son código del motor, no de este `.md`.
- **DON'T** editar a mano `game-data.generated.js`: se regenera con
  `game-export.js` y el test lo valida.
- **DON'T** dar objetivos, premios ni salida: The Bathrooms no se gana, se recorre.
