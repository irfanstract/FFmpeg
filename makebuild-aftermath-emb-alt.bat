





@echo off




set PATH=j:\Dev\emsdk\upstream\emscripten;%PATH%

echo %PATH%




@echo on



emcc -I. -I./fftools -Llibavcodec -Llibavdevice -Llibavfilter -Llibavformat -Llibavutil -Llibpostproc -Llibswresample -Llibswscale -lavcodec -lavdevice -lavfilter -lavformat -lavutil -lswresample -lswscale -Wno-deprecated-declarations -O0 -sUSE_SDL=2 -sNODERAWFS --pre-js wasmmaemb/prel.js fftools/cmdutils.c fftools/ffmpeg_filter.c fftools/ffmpeg_hw.c fftools/ffmpeg_mux.c fftools/ffmpeg_opt.c fftools/opt_common.c fftools/ffmpeg.c -o ./build/ff-ranwithemcp/ffmpeg.js 





