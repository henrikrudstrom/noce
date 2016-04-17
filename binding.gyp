{
  "targets": [
    {
      "target_name": "Geom",
      "sources": [
        "src/Geom_wrap.cxx"
      ],
      "include_dirs": [
        "/home/henrik/OCE/include/oce",
        "/home/henrik/Development/noce/noce/inc",
        "../noce/inc"
      ],
      "libraries": [
        "-L/home/henrik/OCE/lib",
        "-lTKernel",
        "-lTKMath",
        "-lTKG3d"
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
        "/home/henrik/OCE/include/oce",
        "/home/henrik/Development/noce/noce/inc",
        "../noce/inc"
      ],
      "libraries": [
        "-L/home/henrik/OCE/lib",
        "-lTKernel",
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
    }
  ]
}