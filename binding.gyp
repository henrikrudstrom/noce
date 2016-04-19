{
  "targets": [
    {
      "target_name": "brep",
      "sources": [
        "src/brep_wrap.cxx"
      ],
      "include_dirs": [
        "/usr/local/include/oce",
        "/home/ubuntu/workspace/noce/inc",
        "../noce/inc"
      ],
      "libraries": [
        "-L/usr/local/lib",
        "-lTKernel",
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
        "-fpermissive",
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
      "target_name": "Geom",
      "sources": [
        "src/Geom_wrap.cxx"
      ],
      "include_dirs": [
        "/usr/local/include/oce",
        "/home/ubuntu/workspace/noce/inc",
        "../noce/inc"
      ],
      "libraries": [
        "-L/usr/local/lib",
        "-lTKernel",
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
        "-fpermissive",
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
        "/usr/local/include/oce",
        "/home/ubuntu/workspace/noce/inc",
        "../noce/inc"
      ],
      "libraries": [
        "-L/usr/local/lib",
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
        "-fpermissive",
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
        "src/GeometryBuilder.cc",
        "src/mesh_wrap.cxx"
      ],
      "include_dirs": [
        "/usr/local/include/oce",
        "/home/ubuntu/workspace/noce/inc",
        "../noce/inc",
        "<!(node -e \"require('nan')\")"
      ],
      "libraries": [
        "-L/usr/local/lib",
        "-lTKernel",
        "-lTKMath",
        "-lTKAdvTools",
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
        "-fpermissive",
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