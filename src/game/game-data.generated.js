// AUTO-GENERADO por tools/game-export.js desde GAME.md — NO EDITAR A MANO.
// Regenerar con:  node tools/game-export.js
// profile: voxel
window.GAME = {
  "generatedFrom": "GAME.md",
  "profile": "voxel",
  "name": "The Bathrooms",
  "description": "Mundo liminal de baños infinitos capturado en VHS: azulejos enfermizos, moho, luz fluorescente muerta. Sin objetivos, sin salida.",
  "platform": {
    "chunkSize": 18,
    "cellSize": 2,
    "wallHeight": 3,
    "playerSpeed": 3.4,
    "playerRadius": 0.3,
    "viewChunks": 2,
    "eyeHeight": 1.6,
    "audio": {
      "refDist": 4,
      "maxDist": 28
    },
    "texts": {
      "title": "The Bathrooms",
      "rec": "REC",
      "hint": "WASD para caminar, mouse para mirar, Shift para correr"
    }
  },
  "palettesCount": 0,
  "MATERIALS": {
    "TILE_WALL": {
      "color": [
        196,
        202,
        176
      ]
    },
    "TILE_FLOOR": {
      "color": [
        174,
        172,
        148
      ]
    },
    "GROUT": {
      "color": [
        86,
        84,
        70
      ]
    },
    "STALL": {
      "color": [
        150,
        158,
        138
      ]
    },
    "PORCELAIN": {
      "color": [
        212,
        208,
        192
      ]
    },
    "MIRROR": {
      "color": [
        126,
        148,
        146
      ]
    },
    "WATER": {
      "color": [
        98,
        118,
        108
      ]
    },
    "MOLD": {
      "color": [
        58,
        72,
        50
      ]
    },
    "GRIME": {
      "color": [
        94,
        84,
        68
      ]
    },
    "CEILING": {
      "color": [
        198,
        194,
        172
      ]
    },
    "LIGHT_ON": {
      "color": [
        228,
        224,
        176
      ]
    },
    "LIGHT_DEAD": {
      "color": [
        118,
        120,
        116
      ]
    },
    "PAPER": {
      "color": [
        204,
        200,
        186
      ]
    },
    "PIPE": {
      "color": [
        108,
        110,
        106
      ]
    },
    "METAL": {
      "color": [
        126,
        128,
        126
      ]
    },
    "TRASH": {
      "color": [
        78,
        74,
        62
      ]
    }
  },
  "PREFABS": {
    "wall_slab": {
      "size": [
        8,
        9,
        1
      ],
      "fill": "TILE_WALL"
    },
    "floor_slab": {
      "size": [
        8,
        1,
        8
      ],
      "fill": "TILE_FLOOR"
    },
    "ceiling_slab": {
      "size": [
        8,
        1,
        8
      ],
      "fill": "CEILING"
    },
    "stall_side": {
      "size": [
        1,
        9,
        8
      ],
      "fill": "STALL"
    },
    "stall_back": {
      "size": [
        8,
        9,
        1
      ],
      "fill": "STALL"
    },
    "stall_door": {
      "size": [
        6,
        8,
        1
      ],
      "fill": "STALL"
    },
    "toilet_base": {
      "size": [
        4,
        3,
        4
      ],
      "fill": "PORCELAIN"
    },
    "toilet_seat": {
      "size": [
        4,
        1,
        4
      ],
      "fill": "PORCELAIN"
    },
    "sink_basin": {
      "size": [
        5,
        2,
        4
      ],
      "fill": "PORCELAIN"
    },
    "mirror_panel": {
      "size": [
        5,
        5,
        1
      ],
      "fill": "MIRROR",
      "cells": [
        {
          "x": 0,
          "y": 0,
          "z": 0,
          "m": "MOLD"
        },
        {
          "x": 4,
          "y": 0,
          "z": 0,
          "m": "MOLD"
        },
        {
          "x": 0,
          "y": 4,
          "z": 0,
          "m": "MOLD"
        },
        {
          "x": 4,
          "y": 4,
          "z": 0,
          "m": "MOLD"
        }
      ]
    },
    "pipe_segment": {
      "size": [
        1,
        4,
        1
      ],
      "fill": "PIPE"
    },
    "grime_patch": {
      "size": [
        2,
        1,
        1
      ],
      "fill": "GRIME"
    },
    "water_puddle": {
      "size": [
        4,
        1,
        4
      ],
      "fill": "WATER"
    },
    "urinal_bowl": {
      "size": [
        3,
        5,
        2
      ],
      "fill": "PORCELAIN"
    },
    "bin_body": {
      "size": [
        3,
        4,
        3
      ],
      "fill": "METAL"
    },
    "paper_wad": {
      "size": [
        1,
        1,
        1
      ],
      "fill": "PAPER"
    },
    "dispenser_box": {
      "size": [
        2,
        3,
        1
      ],
      "fill": "METAL"
    },
    "light_tube": {
      "size": [
        6,
        1,
        1
      ],
      "fill": "LIGHT_ON"
    },
    "light_tube_dead": {
      "size": [
        6,
        1,
        1
      ],
      "fill": "LIGHT_DEAD"
    }
  },
  "STRUCTURES": {
    "stall_unit": {
      "place": [
        {
          "prefab": "floor_slab",
          "at": [
            0,
            0,
            0
          ]
        },
        {
          "prefab": "stall_side",
          "at": [
            0,
            1,
            0
          ]
        },
        {
          "prefab": "stall_side",
          "at": [
            7,
            1,
            0
          ]
        },
        {
          "prefab": "stall_back",
          "at": [
            0,
            1,
            7
          ]
        },
        {
          "prefab": "stall_door",
          "at": [
            1,
            1,
            1
          ]
        },
        {
          "prefab": "toilet_base",
          "at": [
            2,
            1,
            3
          ]
        },
        {
          "prefab": "toilet_seat",
          "at": [
            2,
            4,
            3
          ]
        },
        {
          "prefab": "water_puddle",
          "at": [
            2,
            1,
            1
          ]
        }
      ]
    },
    "sink_unit": {
      "place": [
        {
          "prefab": "sink_basin",
          "at": [
            0,
            3,
            0
          ]
        },
        {
          "prefab": "mirror_panel",
          "at": [
            0,
            6,
            0
          ]
        },
        {
          "prefab": "pipe_segment",
          "at": [
            1,
            0,
            1
          ]
        },
        {
          "prefab": "pipe_segment",
          "at": [
            3,
            0,
            1
          ]
        },
        {
          "prefab": "grime_patch",
          "at": [
            1,
            3,
            0
          ]
        }
      ]
    },
    "urinal_unit": {
      "place": [
        {
          "prefab": "wall_slab",
          "at": [
            0,
            0,
            2
          ]
        },
        {
          "prefab": "urinal_bowl",
          "at": [
            1,
            2,
            0
          ]
        },
        {
          "prefab": "pipe_segment",
          "at": [
            2,
            0,
            0
          ]
        },
        {
          "prefab": "pipe_segment",
          "at": [
            2,
            6,
            0
          ]
        },
        {
          "prefab": "grime_patch",
          "at": [
            1,
            1,
            0
          ]
        }
      ]
    },
    "bin_full": {
      "place": [
        {
          "prefab": "bin_body",
          "at": [
            1,
            0,
            1
          ]
        },
        {
          "prefab": "paper_wad",
          "at": [
            1,
            4,
            1
          ]
        },
        {
          "prefab": "paper_wad",
          "at": [
            2,
            4,
            2
          ]
        },
        {
          "prefab": "paper_wad",
          "at": [
            3,
            4,
            3
          ]
        },
        {
          "prefab": "paper_wad",
          "at": [
            0,
            1,
            2
          ]
        },
        {
          "prefab": "paper_wad",
          "at": [
            5,
            2,
            2
          ]
        },
        {
          "prefab": "paper_wad",
          "at": [
            2,
            0,
            5
          ]
        },
        {
          "prefab": "paper_wad",
          "at": [
            3,
            3,
            0
          ]
        }
      ]
    },
    "dispenser_empty": {
      "place": [
        {
          "prefab": "dispenser_box",
          "at": [
            0,
            2,
            0
          ]
        },
        {
          "prefab": "grime_patch",
          "at": [
            0,
            1,
            0
          ]
        }
      ]
    },
    "light_fixture": {
      "place": [
        {
          "prefab": "ceiling_slab",
          "at": [
            0,
            1,
            0
          ]
        },
        {
          "prefab": "light_tube",
          "at": [
            1,
            0,
            2
          ]
        },
        {
          "prefab": "light_tube_dead",
          "at": [
            1,
            0,
            4
          ]
        }
      ]
    }
  },
  "VOXELS": {
    "stall_unit": {
      "count": 378,
      "bounds": {
        "min": [
          0,
          0,
          0
        ],
        "max": [
          7,
          9,
          7
        ]
      },
      "voxels": [
        {
          "x": 0,
          "y": 0,
          "z": 0,
          "m": "TILE_FLOOR"
        },
        {
          "x": 0,
          "y": 0,
          "z": 1,
          "m": "TILE_FLOOR"
        },
        {
          "x": 0,
          "y": 0,
          "z": 2,
          "m": "TILE_FLOOR"
        },
        {
          "x": 0,
          "y": 0,
          "z": 3,
          "m": "TILE_FLOOR"
        },
        {
          "x": 0,
          "y": 0,
          "z": 4,
          "m": "TILE_FLOOR"
        },
        {
          "x": 0,
          "y": 0,
          "z": 5,
          "m": "TILE_FLOOR"
        },
        {
          "x": 0,
          "y": 0,
          "z": 6,
          "m": "TILE_FLOOR"
        },
        {
          "x": 0,
          "y": 0,
          "z": 7,
          "m": "TILE_FLOOR"
        },
        {
          "x": 1,
          "y": 0,
          "z": 0,
          "m": "TILE_FLOOR"
        },
        {
          "x": 1,
          "y": 0,
          "z": 1,
          "m": "TILE_FLOOR"
        },
        {
          "x": 1,
          "y": 0,
          "z": 2,
          "m": "TILE_FLOOR"
        },
        {
          "x": 1,
          "y": 0,
          "z": 3,
          "m": "TILE_FLOOR"
        },
        {
          "x": 1,
          "y": 0,
          "z": 4,
          "m": "TILE_FLOOR"
        },
        {
          "x": 1,
          "y": 0,
          "z": 5,
          "m": "TILE_FLOOR"
        },
        {
          "x": 1,
          "y": 0,
          "z": 6,
          "m": "TILE_FLOOR"
        },
        {
          "x": 1,
          "y": 0,
          "z": 7,
          "m": "TILE_FLOOR"
        },
        {
          "x": 2,
          "y": 0,
          "z": 0,
          "m": "TILE_FLOOR"
        },
        {
          "x": 2,
          "y": 0,
          "z": 1,
          "m": "TILE_FLOOR"
        },
        {
          "x": 2,
          "y": 0,
          "z": 2,
          "m": "TILE_FLOOR"
        },
        {
          "x": 2,
          "y": 0,
          "z": 3,
          "m": "TILE_FLOOR"
        },
        {
          "x": 2,
          "y": 0,
          "z": 4,
          "m": "TILE_FLOOR"
        },
        {
          "x": 2,
          "y": 0,
          "z": 5,
          "m": "TILE_FLOOR"
        },
        {
          "x": 2,
          "y": 0,
          "z": 6,
          "m": "TILE_FLOOR"
        },
        {
          "x": 2,
          "y": 0,
          "z": 7,
          "m": "TILE_FLOOR"
        },
        {
          "x": 3,
          "y": 0,
          "z": 0,
          "m": "TILE_FLOOR"
        },
        {
          "x": 3,
          "y": 0,
          "z": 1,
          "m": "TILE_FLOOR"
        },
        {
          "x": 3,
          "y": 0,
          "z": 2,
          "m": "TILE_FLOOR"
        },
        {
          "x": 3,
          "y": 0,
          "z": 3,
          "m": "TILE_FLOOR"
        },
        {
          "x": 3,
          "y": 0,
          "z": 4,
          "m": "TILE_FLOOR"
        },
        {
          "x": 3,
          "y": 0,
          "z": 5,
          "m": "TILE_FLOOR"
        },
        {
          "x": 3,
          "y": 0,
          "z": 6,
          "m": "TILE_FLOOR"
        },
        {
          "x": 3,
          "y": 0,
          "z": 7,
          "m": "TILE_FLOOR"
        },
        {
          "x": 4,
          "y": 0,
          "z": 0,
          "m": "TILE_FLOOR"
        },
        {
          "x": 4,
          "y": 0,
          "z": 1,
          "m": "TILE_FLOOR"
        },
        {
          "x": 4,
          "y": 0,
          "z": 2,
          "m": "TILE_FLOOR"
        },
        {
          "x": 4,
          "y": 0,
          "z": 3,
          "m": "TILE_FLOOR"
        },
        {
          "x": 4,
          "y": 0,
          "z": 4,
          "m": "TILE_FLOOR"
        },
        {
          "x": 4,
          "y": 0,
          "z": 5,
          "m": "TILE_FLOOR"
        },
        {
          "x": 4,
          "y": 0,
          "z": 6,
          "m": "TILE_FLOOR"
        },
        {
          "x": 4,
          "y": 0,
          "z": 7,
          "m": "TILE_FLOOR"
        },
        {
          "x": 5,
          "y": 0,
          "z": 0,
          "m": "TILE_FLOOR"
        },
        {
          "x": 5,
          "y": 0,
          "z": 1,
          "m": "TILE_FLOOR"
        },
        {
          "x": 5,
          "y": 0,
          "z": 2,
          "m": "TILE_FLOOR"
        },
        {
          "x": 5,
          "y": 0,
          "z": 3,
          "m": "TILE_FLOOR"
        },
        {
          "x": 5,
          "y": 0,
          "z": 4,
          "m": "TILE_FLOOR"
        },
        {
          "x": 5,
          "y": 0,
          "z": 5,
          "m": "TILE_FLOOR"
        },
        {
          "x": 5,
          "y": 0,
          "z": 6,
          "m": "TILE_FLOOR"
        },
        {
          "x": 5,
          "y": 0,
          "z": 7,
          "m": "TILE_FLOOR"
        },
        {
          "x": 6,
          "y": 0,
          "z": 0,
          "m": "TILE_FLOOR"
        },
        {
          "x": 6,
          "y": 0,
          "z": 1,
          "m": "TILE_FLOOR"
        },
        {
          "x": 6,
          "y": 0,
          "z": 2,
          "m": "TILE_FLOOR"
        },
        {
          "x": 6,
          "y": 0,
          "z": 3,
          "m": "TILE_FLOOR"
        },
        {
          "x": 6,
          "y": 0,
          "z": 4,
          "m": "TILE_FLOOR"
        },
        {
          "x": 6,
          "y": 0,
          "z": 5,
          "m": "TILE_FLOOR"
        },
        {
          "x": 6,
          "y": 0,
          "z": 6,
          "m": "TILE_FLOOR"
        },
        {
          "x": 6,
          "y": 0,
          "z": 7,
          "m": "TILE_FLOOR"
        },
        {
          "x": 7,
          "y": 0,
          "z": 0,
          "m": "TILE_FLOOR"
        },
        {
          "x": 7,
          "y": 0,
          "z": 1,
          "m": "TILE_FLOOR"
        },
        {
          "x": 7,
          "y": 0,
          "z": 2,
          "m": "TILE_FLOOR"
        },
        {
          "x": 7,
          "y": 0,
          "z": 3,
          "m": "TILE_FLOOR"
        },
        {
          "x": 7,
          "y": 0,
          "z": 4,
          "m": "TILE_FLOOR"
        },
        {
          "x": 7,
          "y": 0,
          "z": 5,
          "m": "TILE_FLOOR"
        },
        {
          "x": 7,
          "y": 0,
          "z": 6,
          "m": "TILE_FLOOR"
        },
        {
          "x": 7,
          "y": 0,
          "z": 7,
          "m": "TILE_FLOOR"
        },
        {
          "x": 0,
          "y": 1,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 9,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 9,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 9,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 9,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 9,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 9,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 9,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 0,
          "y": 9,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 9,
          "z": 0,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 9,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 9,
          "z": 2,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 9,
          "z": 3,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 9,
          "z": 4,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 9,
          "z": 5,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 9,
          "z": 6,
          "m": "STALL"
        },
        {
          "x": 7,
          "y": 9,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 1,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 2,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 3,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 4,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 5,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 6,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 7,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 8,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 9,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 1,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 2,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 3,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 4,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 5,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 6,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 7,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 8,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 9,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 1,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 2,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 3,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 4,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 5,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 6,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 7,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 8,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 9,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 1,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 2,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 3,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 4,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 5,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 6,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 7,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 8,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 9,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 1,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 2,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 3,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 4,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 5,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 6,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 7,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 8,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 9,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 1,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 2,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 3,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 4,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 5,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 6,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 7,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 8,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 9,
          "z": 7,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 1,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 2,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 3,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 4,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 5,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 6,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 7,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 1,
          "y": 8,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 1,
          "z": 1,
          "m": "WATER"
        },
        {
          "x": 2,
          "y": 2,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 3,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 4,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 5,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 6,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 7,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 8,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 1,
          "z": 1,
          "m": "WATER"
        },
        {
          "x": 3,
          "y": 2,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 3,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 4,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 5,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 6,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 7,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 3,
          "y": 8,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 1,
          "z": 1,
          "m": "WATER"
        },
        {
          "x": 4,
          "y": 2,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 3,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 4,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 5,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 6,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 7,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 4,
          "y": 8,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 1,
          "z": 1,
          "m": "WATER"
        },
        {
          "x": 5,
          "y": 2,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 3,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 4,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 5,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 6,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 7,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 5,
          "y": 8,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 1,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 2,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 3,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 4,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 5,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 6,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 7,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 6,
          "y": 8,
          "z": 1,
          "m": "STALL"
        },
        {
          "x": 2,
          "y": 1,
          "z": 3,
          "m": "WATER"
        },
        {
          "x": 2,
          "y": 1,
          "z": 4,
          "m": "WATER"
        },
        {
          "x": 2,
          "y": 1,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 1,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 2,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 2,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 2,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 2,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 3,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 3,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 3,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 1,
          "z": 3,
          "m": "WATER"
        },
        {
          "x": 3,
          "y": 1,
          "z": 4,
          "m": "WATER"
        },
        {
          "x": 3,
          "y": 1,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 1,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 2,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 2,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 2,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 2,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 1,
          "z": 3,
          "m": "WATER"
        },
        {
          "x": 4,
          "y": 1,
          "z": 4,
          "m": "WATER"
        },
        {
          "x": 4,
          "y": 1,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 1,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 2,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 2,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 2,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 2,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 3,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 3,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 3,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 1,
          "z": 3,
          "m": "WATER"
        },
        {
          "x": 5,
          "y": 1,
          "z": 4,
          "m": "WATER"
        },
        {
          "x": 5,
          "y": 1,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 1,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 2,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 2,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 2,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 2,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 3,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 3,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 3,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 4,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 4,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 4,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 4,
          "z": 4,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 4,
          "z": 5,
          "m": "PORCELAIN"
        },
        {
          "x": 5,
          "y": 4,
          "z": 6,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 1,
          "z": 2,
          "m": "WATER"
        },
        {
          "x": 3,
          "y": 1,
          "z": 2,
          "m": "WATER"
        },
        {
          "x": 4,
          "y": 1,
          "z": 2,
          "m": "WATER"
        },
        {
          "x": 5,
          "y": 1,
          "z": 2,
          "m": "WATER"
        }
      ]
    },
    "sink_unit": {
      "count": 71,
      "bounds": {
        "min": [
          0,
          0,
          0
        ],
        "max": [
          4,
          10,
          3
        ]
      },
      "voxels": [
        {
          "x": 0,
          "y": 3,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 0,
          "y": 3,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 0,
          "y": 3,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 0,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 0,
          "y": 4,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 0,
          "y": 4,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 0,
          "y": 4,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 0,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 3,
          "z": 0,
          "m": "GRIME"
        },
        {
          "x": 1,
          "y": 3,
          "z": 1,
          "m": "PIPE"
        },
        {
          "x": 1,
          "y": 3,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 4,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 4,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 4,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 3,
          "z": 0,
          "m": "GRIME"
        },
        {
          "x": 2,
          "y": 3,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 3,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 1,
          "m": "PIPE"
        },
        {
          "x": 3,
          "y": 3,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 3,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 3,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 3,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 3,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 4,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 4,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 4,
          "z": 2,
          "m": "PORCELAIN"
        },
        {
          "x": 4,
          "y": 4,
          "z": 3,
          "m": "PORCELAIN"
        },
        {
          "x": 0,
          "y": 6,
          "z": 0,
          "m": "MOLD"
        },
        {
          "x": 0,
          "y": 7,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 0,
          "y": 8,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 0,
          "y": 9,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 0,
          "y": 10,
          "z": 0,
          "m": "MOLD"
        },
        {
          "x": 1,
          "y": 6,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 1,
          "y": 7,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 1,
          "y": 8,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 1,
          "y": 9,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 1,
          "y": 10,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 2,
          "y": 6,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 2,
          "y": 7,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 2,
          "y": 8,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 2,
          "y": 9,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 2,
          "y": 10,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 3,
          "y": 6,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 3,
          "y": 7,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 3,
          "y": 8,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 3,
          "y": 9,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 3,
          "y": 10,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 4,
          "y": 6,
          "z": 0,
          "m": "MOLD"
        },
        {
          "x": 4,
          "y": 7,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 4,
          "y": 8,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 4,
          "y": 9,
          "z": 0,
          "m": "MIRROR"
        },
        {
          "x": 4,
          "y": 10,
          "z": 0,
          "m": "MOLD"
        },
        {
          "x": 1,
          "y": 0,
          "z": 1,
          "m": "PIPE"
        },
        {
          "x": 1,
          "y": 1,
          "z": 1,
          "m": "PIPE"
        },
        {
          "x": 1,
          "y": 2,
          "z": 1,
          "m": "PIPE"
        },
        {
          "x": 3,
          "y": 0,
          "z": 1,
          "m": "PIPE"
        },
        {
          "x": 3,
          "y": 1,
          "z": 1,
          "m": "PIPE"
        },
        {
          "x": 3,
          "y": 2,
          "z": 1,
          "m": "PIPE"
        }
      ]
    },
    "urinal_unit": {
      "count": 108,
      "bounds": {
        "min": [
          0,
          0,
          0
        ],
        "max": [
          7,
          9,
          2
        ]
      },
      "voxels": [
        {
          "x": 0,
          "y": 0,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 0,
          "y": 2,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 0,
          "y": 5,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 0,
          "y": 6,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 0,
          "y": 7,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 0,
          "y": 8,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 0,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 1,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 2,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 3,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 4,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 5,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 6,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 7,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 8,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 0,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 1,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 2,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 3,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 4,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 5,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 6,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 7,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 2,
          "y": 8,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 0,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 1,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 2,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 3,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 4,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 5,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 6,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 7,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 3,
          "y": 8,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 0,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 1,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 2,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 3,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 4,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 5,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 6,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 7,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 4,
          "y": 8,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 0,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 1,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 2,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 3,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 4,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 5,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 6,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 7,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 5,
          "y": 8,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 0,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 1,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 2,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 3,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 4,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 5,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 6,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 7,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 6,
          "y": 8,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 0,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 1,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 2,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 3,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 4,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 5,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 6,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 7,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 7,
          "y": 8,
          "z": 2,
          "m": "TILE_WALL"
        },
        {
          "x": 1,
          "y": 2,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 2,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 3,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 3,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 4,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 4,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 5,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 5,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 6,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 1,
          "y": 6,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 2,
          "z": 0,
          "m": "PIPE"
        },
        {
          "x": 2,
          "y": 2,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 3,
          "z": 0,
          "m": "PIPE"
        },
        {
          "x": 2,
          "y": 3,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 4,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 5,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 5,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 6,
          "z": 0,
          "m": "PIPE"
        },
        {
          "x": 2,
          "y": 6,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 2,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 2,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 3,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 4,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 5,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 5,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 6,
          "z": 0,
          "m": "PORCELAIN"
        },
        {
          "x": 3,
          "y": 6,
          "z": 1,
          "m": "PORCELAIN"
        },
        {
          "x": 2,
          "y": 0,
          "z": 0,
          "m": "PIPE"
        },
        {
          "x": 2,
          "y": 1,
          "z": 0,
          "m": "GRIME"
        },
        {
          "x": 2,
          "y": 7,
          "z": 0,
          "m": "PIPE"
        },
        {
          "x": 2,
          "y": 8,
          "z": 0,
          "m": "PIPE"
        },
        {
          "x": 2,
          "y": 9,
          "z": 0,
          "m": "PIPE"
        },
        {
          "x": 1,
          "y": 1,
          "z": 0,
          "m": "GRIME"
        }
      ]
    },
    "bin_full": {
      "count": 43,
      "bounds": {
        "min": [
          0,
          0,
          0
        ],
        "max": [
          5,
          4,
          5
        ]
      },
      "voxels": [
        {
          "x": 1,
          "y": 0,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 0,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 0,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 1,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 1,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 1,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 2,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 2,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 2,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 3,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 3,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 3,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 0,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 0,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 0,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 1,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 1,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 1,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 2,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 2,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 2,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 3,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 3,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 2,
          "y": 3,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 0,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 0,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 0,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 1,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 1,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 1,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 2,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 2,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 2,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 3,
          "z": 1,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 3,
          "z": 2,
          "m": "METAL"
        },
        {
          "x": 3,
          "y": 3,
          "z": 3,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 4,
          "z": 1,
          "m": "PAPER"
        },
        {
          "x": 2,
          "y": 4,
          "z": 2,
          "m": "PAPER"
        },
        {
          "x": 3,
          "y": 4,
          "z": 3,
          "m": "PAPER"
        },
        {
          "x": 0,
          "y": 1,
          "z": 2,
          "m": "PAPER"
        },
        {
          "x": 5,
          "y": 2,
          "z": 2,
          "m": "PAPER"
        },
        {
          "x": 2,
          "y": 0,
          "z": 5,
          "m": "PAPER"
        },
        {
          "x": 3,
          "y": 3,
          "z": 0,
          "m": "PAPER"
        }
      ]
    },
    "dispenser_empty": {
      "count": 8,
      "bounds": {
        "min": [
          0,
          1,
          0
        ],
        "max": [
          1,
          4,
          0
        ]
      },
      "voxels": [
        {
          "x": 0,
          "y": 2,
          "z": 0,
          "m": "METAL"
        },
        {
          "x": 0,
          "y": 3,
          "z": 0,
          "m": "METAL"
        },
        {
          "x": 0,
          "y": 4,
          "z": 0,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 2,
          "z": 0,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 3,
          "z": 0,
          "m": "METAL"
        },
        {
          "x": 1,
          "y": 4,
          "z": 0,
          "m": "METAL"
        },
        {
          "x": 0,
          "y": 1,
          "z": 0,
          "m": "GRIME"
        },
        {
          "x": 1,
          "y": 1,
          "z": 0,
          "m": "GRIME"
        }
      ]
    },
    "light_fixture": {
      "count": 76,
      "bounds": {
        "min": [
          0,
          0,
          0
        ],
        "max": [
          7,
          1,
          7
        ]
      },
      "voxels": [
        {
          "x": 0,
          "y": 1,
          "z": 0,
          "m": "CEILING"
        },
        {
          "x": 0,
          "y": 1,
          "z": 1,
          "m": "CEILING"
        },
        {
          "x": 0,
          "y": 1,
          "z": 2,
          "m": "CEILING"
        },
        {
          "x": 0,
          "y": 1,
          "z": 3,
          "m": "CEILING"
        },
        {
          "x": 0,
          "y": 1,
          "z": 4,
          "m": "CEILING"
        },
        {
          "x": 0,
          "y": 1,
          "z": 5,
          "m": "CEILING"
        },
        {
          "x": 0,
          "y": 1,
          "z": 6,
          "m": "CEILING"
        },
        {
          "x": 0,
          "y": 1,
          "z": 7,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 1,
          "z": 0,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 1,
          "z": 1,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 1,
          "z": 2,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 1,
          "z": 3,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 1,
          "z": 4,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 1,
          "z": 5,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 1,
          "z": 6,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 1,
          "z": 7,
          "m": "CEILING"
        },
        {
          "x": 2,
          "y": 1,
          "z": 0,
          "m": "CEILING"
        },
        {
          "x": 2,
          "y": 1,
          "z": 1,
          "m": "CEILING"
        },
        {
          "x": 2,
          "y": 1,
          "z": 2,
          "m": "CEILING"
        },
        {
          "x": 2,
          "y": 1,
          "z": 3,
          "m": "CEILING"
        },
        {
          "x": 2,
          "y": 1,
          "z": 4,
          "m": "CEILING"
        },
        {
          "x": 2,
          "y": 1,
          "z": 5,
          "m": "CEILING"
        },
        {
          "x": 2,
          "y": 1,
          "z": 6,
          "m": "CEILING"
        },
        {
          "x": 2,
          "y": 1,
          "z": 7,
          "m": "CEILING"
        },
        {
          "x": 3,
          "y": 1,
          "z": 0,
          "m": "CEILING"
        },
        {
          "x": 3,
          "y": 1,
          "z": 1,
          "m": "CEILING"
        },
        {
          "x": 3,
          "y": 1,
          "z": 2,
          "m": "CEILING"
        },
        {
          "x": 3,
          "y": 1,
          "z": 3,
          "m": "CEILING"
        },
        {
          "x": 3,
          "y": 1,
          "z": 4,
          "m": "CEILING"
        },
        {
          "x": 3,
          "y": 1,
          "z": 5,
          "m": "CEILING"
        },
        {
          "x": 3,
          "y": 1,
          "z": 6,
          "m": "CEILING"
        },
        {
          "x": 3,
          "y": 1,
          "z": 7,
          "m": "CEILING"
        },
        {
          "x": 4,
          "y": 1,
          "z": 0,
          "m": "CEILING"
        },
        {
          "x": 4,
          "y": 1,
          "z": 1,
          "m": "CEILING"
        },
        {
          "x": 4,
          "y": 1,
          "z": 2,
          "m": "CEILING"
        },
        {
          "x": 4,
          "y": 1,
          "z": 3,
          "m": "CEILING"
        },
        {
          "x": 4,
          "y": 1,
          "z": 4,
          "m": "CEILING"
        },
        {
          "x": 4,
          "y": 1,
          "z": 5,
          "m": "CEILING"
        },
        {
          "x": 4,
          "y": 1,
          "z": 6,
          "m": "CEILING"
        },
        {
          "x": 4,
          "y": 1,
          "z": 7,
          "m": "CEILING"
        },
        {
          "x": 5,
          "y": 1,
          "z": 0,
          "m": "CEILING"
        },
        {
          "x": 5,
          "y": 1,
          "z": 1,
          "m": "CEILING"
        },
        {
          "x": 5,
          "y": 1,
          "z": 2,
          "m": "CEILING"
        },
        {
          "x": 5,
          "y": 1,
          "z": 3,
          "m": "CEILING"
        },
        {
          "x": 5,
          "y": 1,
          "z": 4,
          "m": "CEILING"
        },
        {
          "x": 5,
          "y": 1,
          "z": 5,
          "m": "CEILING"
        },
        {
          "x": 5,
          "y": 1,
          "z": 6,
          "m": "CEILING"
        },
        {
          "x": 5,
          "y": 1,
          "z": 7,
          "m": "CEILING"
        },
        {
          "x": 6,
          "y": 1,
          "z": 0,
          "m": "CEILING"
        },
        {
          "x": 6,
          "y": 1,
          "z": 1,
          "m": "CEILING"
        },
        {
          "x": 6,
          "y": 1,
          "z": 2,
          "m": "CEILING"
        },
        {
          "x": 6,
          "y": 1,
          "z": 3,
          "m": "CEILING"
        },
        {
          "x": 6,
          "y": 1,
          "z": 4,
          "m": "CEILING"
        },
        {
          "x": 6,
          "y": 1,
          "z": 5,
          "m": "CEILING"
        },
        {
          "x": 6,
          "y": 1,
          "z": 6,
          "m": "CEILING"
        },
        {
          "x": 6,
          "y": 1,
          "z": 7,
          "m": "CEILING"
        },
        {
          "x": 7,
          "y": 1,
          "z": 0,
          "m": "CEILING"
        },
        {
          "x": 7,
          "y": 1,
          "z": 1,
          "m": "CEILING"
        },
        {
          "x": 7,
          "y": 1,
          "z": 2,
          "m": "CEILING"
        },
        {
          "x": 7,
          "y": 1,
          "z": 3,
          "m": "CEILING"
        },
        {
          "x": 7,
          "y": 1,
          "z": 4,
          "m": "CEILING"
        },
        {
          "x": 7,
          "y": 1,
          "z": 5,
          "m": "CEILING"
        },
        {
          "x": 7,
          "y": 1,
          "z": 6,
          "m": "CEILING"
        },
        {
          "x": 7,
          "y": 1,
          "z": 7,
          "m": "CEILING"
        },
        {
          "x": 1,
          "y": 0,
          "z": 2,
          "m": "LIGHT_ON"
        },
        {
          "x": 2,
          "y": 0,
          "z": 2,
          "m": "LIGHT_ON"
        },
        {
          "x": 3,
          "y": 0,
          "z": 2,
          "m": "LIGHT_ON"
        },
        {
          "x": 4,
          "y": 0,
          "z": 2,
          "m": "LIGHT_ON"
        },
        {
          "x": 5,
          "y": 0,
          "z": 2,
          "m": "LIGHT_ON"
        },
        {
          "x": 6,
          "y": 0,
          "z": 2,
          "m": "LIGHT_ON"
        },
        {
          "x": 1,
          "y": 0,
          "z": 4,
          "m": "LIGHT_DEAD"
        },
        {
          "x": 2,
          "y": 0,
          "z": 4,
          "m": "LIGHT_DEAD"
        },
        {
          "x": 3,
          "y": 0,
          "z": 4,
          "m": "LIGHT_DEAD"
        },
        {
          "x": 4,
          "y": 0,
          "z": 4,
          "m": "LIGHT_DEAD"
        },
        {
          "x": 5,
          "y": 0,
          "z": 4,
          "m": "LIGHT_DEAD"
        },
        {
          "x": 6,
          "y": 0,
          "z": 4,
          "m": "LIGHT_DEAD"
        }
      ]
    }
  }
};
