
// @ts-check
"use strict" ;

/* https://emscripten.org/docs/tools_reference/emcc.html#arguments */






Module["iext"] = {
  callMain ,
  // iac: wasmExports ,
} ;

/** */
Module["iac"] ;
void (() => (Module["iac"] = new Object ) )() ;
Module.whenLoaded.then(v => { Module["iac"] = wasmExports ; } )



var asyncLoad = (
  ((/** @type {(url: any, onload: (value) => any, onerror: (value) => any, noRunDep?: boolean | undefined) => void } */ asyncLoadImpl) => (
    (
      /** @type {(...x: Parameters<typeof asyncLoadImpl>) => void } */ (url, onload, onError, ...etc ) => (
        asyncLoadImpl(url, onload, (z) => (
          onError((Object(z) === z) ? z : new Error(`loading failed for ${JSON.stringify({ url, }, null, 2 ).replaceAll(/\s+/g, " ") }`))
        ), ...etc)
      )
    )
  ))(asyncLoad)
) ;







/**
 * in case of ESM imports or imported via `<script ... />`
 * there'll be no such thing `module`
 * 
 */
if (typeof module !== "undefined") {
  ;
  // @ts-ignore
  module.exports = (
    // @ts-ignore
    Module
  ) ;

  console["info"](`ffm.js exported as CJS.`) ;
} else {

  console["info"](`ffm.js ran outside CJS space.`) ;
}









