
// @ts-check
"use strict" ;

/* https://emscripten.org/docs/tools_reference/emcc.html#arguments */





/**
 * 
 * @module
 */
var Module = {} ;

1 && (Module = (globalThis.FfmModule ??= {} ) ) ;

Module.en = function () {} ;

Module.en ;

const isCalledAsMainModule = (
  (typeof require !== "undefined") && (require.main === module)
) ;

if (isCalledAsMainModule ) {
  ;
  console["info"](`ffm.js ran as main-module.`) ;
} else {
  Module["noInitialRun"] = 1 ;
}




// Module['onRuntimeInitialized']
Module.whenLoaded = (
  new Promise((/** @type {(x: void) => void } */ cont) => void (Module['onRuntimeInitialized'] = () => cont() ) )
) ;







