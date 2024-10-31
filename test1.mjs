






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

    await ffConvLib.whenLoaded ;
    
    ffConvLib.iext.callMain(["-muxers"]) ;
    
    ffConvLib.iext.callMain(["-muxers"]) ;
    
    ffConvLib.iac.av_codec_register(0 ) === 0 || console["warn"](`failed to register additional codecs`) ;
    
    ffConvLib.iext.callMain(["-muxers"]) ;

  })()
  .catch(z => (
    console["error"](z)
  ))
) ;





















