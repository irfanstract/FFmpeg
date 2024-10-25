

// @ts-check
"use strict" ;

import {
  execSync,
  execFileSync,
  spawnSync,
} from "node:child_process" ;

import * as Path from "node:path";

import { fileURLToPath, } from "node:url";

import {
  // ,
} from "node:os" ;


















const baseDir = (
  import.meta.dirname
) ;

const searchDirs =  (
  [
    "fftools",
    "libavutil",
    "libavformat",
    "libavcodec",
    "libavdevice",
    "libavformat",
    "libavfilter",
    "libswscale",
    "libswresample",
    "libpostproc",
  ]
  .map(f => (
    Path.join(baseDir, f )
  ))
) ;

// J:\Dev\StuDKitSrc\scripts\exp\FindCpps.bat --base-dir=J:\Dev\ff202303

const files = (

  (
    /** @type {string[]} */ (JSON.parse((
      execFileSync("J:\\Dev\\StuDKitSrc\\scripts\\exp\\FindCpps.bat" , ["--base-dir=J:\\Dev\\ff202303", ...searchDirs ] , {
        shell: true,
        stdio: ["inherit", "pipe", "inherit"] ,
        encoding: "utf-8",
      })
    )))
  )
  .map(/** @return {String} */ (f) => (
    f.replaceAll("\\", "/")
  ) )
  .filter(e => {

    if (e === "fftools/ffprobe.c" || e === "fftools/ffplay.c" ) { return false ; }

    if (e === "libavutil/macos_kperf.c" ) { return false ; }

    if (e.match(/^libavutil\/hwcontext_(\w+)/g ) ) { return false ; }
    if (e.match(/^lib\w+\/(vulkan).*/) ) { return false ; }
    if (e.match(/^lib\w+\/(soxr).*/) ) { return false ; }

    if (e === "libavutil/x86/cpu.c" ) { return false ; }
    if (e.match((
      RegExp((
        `^lib\\w+\\/(${(
          "ppc|mips|loongarch|arm|aarch64"
          .split("|")
          .concat(1 ? ["x86"] : [] )
          .join("|")
        )}).*`
      ))
    ) ) ) { return false ; }

    if (e === "libavutil/tx_template.c" || e.match(/_template\.c$/) ) {
      /* compilation failed with resulting Syntax Error(s) and etc . read what its name says: "template", "base template for writing tx tables" */
      /* disabling */
      return false ;
    }

    ;
    if (e.match(/^lib(av(codec|device|format|filter))/) ) {
      if (e.match(/^lib(av(\w+))\/(version|utils|\1|allfilters|allcodecs|codec_desc|bitstream_filters|protocols|allformats|options)\.c$/) ) { return true ; }
      return false ;
    }

    if (e.match(/^lib.*?tests/g ) || e.match(/^libsw.*?test/g ) ) { return false ; }

    return true ;
  } )
) ;

console["log"]((
  JSON.stringify(files, null, 2 )
  // .replace(/\s+/g, " ")
)) ;
























