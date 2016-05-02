{
  "targets": [
    {
      "target_name": "geom",
      "sources": [
        "src/geom_wrap.cxx"
      ],
      "include_dirs": [
        "/home/henrik/OCE-Debug/include/oce",
        "/home/henrik/Development/noce/noce-dev/build/inc",
        "build/inc"
      ],
      "libraries": [
        "-L/home/henrik/OCE-Debug/lib",
        "-lTKMath",
        "-lTKG3d",
        "-lTKGeomBase"
      ],
      "cflags": [
        "-DCSFDB",
        "-DHAVE_CONFIG_H",
        "-DOCC_CONVERT_SIGNALS",
        "-D_OCC64",
        "-Dgp_EXPORTS",
        "-Os",
        "-DNDEBUG",
        "-fPIC",
        "-DSWIG_TYPE_TABLE=occ.js"
      ],
      "cflags!": [
        "-fno-exceptions"
      ],
      "cflags_cc!": [
        "-fno-exceptions"
      ]
    },
    {
      "target_name": "gp",
      "sources": [
        "src/gp_wrap.cxx"
      ],
      "include_dirs": [
        "/home/henrik/OCE-Debug/include/oce",
        "/home/henrik/Development/noce/noce-dev/build/inc",
        "build/inc"
      ],
      "libraries": [
        "-L/home/henrik/OCE-Debug/lib",
        "-lTKMath"
      ],
      "cflags": [
        "-DCSFDB",
        "-DHAVE_CONFIG_H",
        "-DOCC_CONVERT_SIGNALS",
        "-D_OCC64",
        "-Dgp_EXPORTS",
        "-Os",
        "-DNDEBUG",
        "-fPIC",
        "-DSWIG_TYPE_TABLE=occ.js"
      ],
      "cflags!": [
        "-fno-exceptions"
      ],
      "cflags_cc!": [
        "-fno-exceptions"
      ]
    },
    {
      "target_name": "mesh",
      "sources": [
        "src/Mesh.cc",
        "src/Util.cc",
        "src/mesh_wrap.cxx"
      ],
      "include_dirs": [
        "/home/henrik/OCE-Debug/include/oce",
        "/home/henrik/Development/noce/noce-dev/build/inc",
        "build/inc",
        "<!(node -e \"require('nan')\")"
      ],
      "libraries": [
        "-L/home/henrik/OCE-Debug/lib",
        "-lTKernel",
        "-lTKMath",
        "-lTKG2d",
        "-lTKG3d",
        "-lTKGeomBase",
        "-lTKBRep",
        "-lTKGeomAlgo",
        "-lTKTopAlgo",
        "-lTKPrim",
        "-lTKBO",
        "-lTKMesh",
        "-lTKXMesh"
      ],
      "cflags": [
        "-DCSFDB",
        "-DHAVE_CONFIG_H",
        "-DOCC_CONVERT_SIGNALS",
        "-D_OCC64",
        "-Dgp_EXPORTS",
        "-Os",
        "-DNDEBUG",
        "-fPIC",
        "-DSWIG_TYPE_TABLE=occ.js"
      ],
      "cflags!": [
        "-fno-exceptions"
      ],
      "cflags_cc!": [
        "-fno-exceptions"
      ]
    },
    {
      "target_name": "primitives",
      "sources": [
        "src/primitives_wrap.cxx"
      ],
      "include_dirs": [
        "/home/henrik/OCE-Debug/include/oce",
        "/home/henrik/Development/noce/noce-dev/build/inc",
        "build/inc"
      ],
      "libraries": [
        "-L/home/henrik/OCE-Debug/lib",
        "-lTKPrim"
      ],
      "cflags": [
        "-DCSFDB",
        "-DHAVE_CONFIG_H",
        "-DOCC_CONVERT_SIGNALS",
        "-D_OCC64",
        "-Dgp_EXPORTS",
        "-Os",
        "-DNDEBUG",
        "-fPIC",
        "-DSWIG_TYPE_TABLE=occ.js"
      ],
      "cflags!": [
        "-fno-exceptions"
      ],
      "cflags_cc!": [
        "-fno-exceptions"
      ]
    },
    {
      "target_name": "topo",
      "sources": [
        "src/topo_wrap.cxx"
      ],
      "include_dirs": [
        "/home/henrik/OCE-Debug/include/oce",
        "/home/henrik/Development/noce/noce-dev/build/inc",
        "build/inc"
      ],
      "libraries": [
        "-L/home/henrik/OCE-Debug/lib",
        "-lTKMath",
        "-lTKG3d",
        "-lTKBRep",
        "-lTKTopAlgo"
      ],
      "cflags": [
        "-DCSFDB",
        "-DHAVE_CONFIG_H",
        "-DOCC_CONVERT_SIGNALS",
        "-D_OCC64",
        "-Dgp_EXPORTS",
        "-Os",
        "-DNDEBUG",
        "-fPIC",
        "-DSWIG_TYPE_TABLE=occ.js"
      ],
      "cflags!": [
        "-fno-exceptions"
      ],
      "cflags_cc!": [
        "-fno-exceptions"
      ]
    }
  ]
}