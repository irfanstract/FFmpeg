






/// <reference lib="ES2023" />
// /// <reference lib="ESNext.Array" />




// @ts-check
"use strict" ;

const require = createRequire(import.meta.url) ;

import { createRequire, } from "node:module";

import {
  execSync,
  execFileSync,
  spawnSync,
} from "node:child_process" ;

import * as Path from "node:path";

import { fileURLToPath, } from "node:url";

import {
  unlinkSync,
  // ,
  writeFileSync ,
  writeSync ,
} from "node:fs" ;

import {
  // ,
} from "node:os" ;











;

void (
  (async () => {
    ;
    const ffConvLib = require("./build/ff-ranwithemcp/ffmpeg") ;

    await (await import("node:timers/promises") ).setTimeout(3 * 1000 ) ;
    
    await ffConvLib.whenLoaded ;

    if (0) {
      // await (await import("node:timers/promises") ).setTimeout(3 * 1000 ) ;
      // await (await import("node:timers/promises") ).setTimeout(3 * 1000 ) ;
      // await (await import("node:timers/promises") ).setTimeout(3 * 1000 ) ;
      0 && ffConvLib.iac.wasmImports.avpriv_register_devices() ;
      ffConvLib.iext.callMain(["-muxers"]) ;
      console["log"](`exiting early`) ;
      return ;
    }

    // await (await import("node:timers/promises") ).setTimeout(1 * 1000 ) ;

    ;
    ffConvLib.iext.callMain(["-loglevel", "verbose"]) ;
    
    ffConvLib.iext.callMain(["-muxers"]) ;
    
    // ffConvLib.iext.callMain(["-muxers"]) ;
    
    try {
      ;
      console["log"](`calling 'av_codec_register'`);
      ffConvLib.iac.wasmImports.av_codec_register(0 ) === 0 || console["warn"](`failed to register additional codecs`) ;
      console["log"](`done with 'av_codec_register'`);
    } finally {
      void (
        (async () => {
          ;
          ffConvLib.iext.callMain(["-encoders"]) ;
        } )()
      ) ;
    }
    
    ffConvLib.iext.callMain(["-muxers"]) ;

  })()
  .catch(z => (
    console["error"](z)
  ))
) ;





















