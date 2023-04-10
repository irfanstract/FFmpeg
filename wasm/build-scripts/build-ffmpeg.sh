#!/bin/bash

set -eo pipefail
source $(dirname $0)/var.sh

if [[ "$FFMPEG_ST" != "yes" ]]; then
  mkdir -p wasm/packages/core-mt/dist
  EXPORTED_FUNCTIONS="[_main, __emscripten_proxy_main, _malloc]"
  EXTRA_FLAGS=(
    -pthread
    -s USE_PTHREADS=1                             # enable pthreads support
    -s PROXY_TO_PTHREAD=1                         # detach main() from browser/UI main thread
    -o wasm/packages/core-mt/dist/ffmpeg-core.js
		-s INITIAL_MEMORY=1073741824                  # 1GB
  )
else
  mkdir -p wasm/packages/core-st/dist
  EXPORTED_FUNCTIONS="[_main, _malloc]"
  EXTRA_FLAGS=(
    -o wasm/packages/core-st/dist/ffmpeg-core.js
		-s INITIAL_MEMORY=33554432                   # 32MB
		-s MAXIMUM_MEMORY=1073741824                  # 1GB
		-s ALLOW_MEMORY_GROWTH=1
  )
fi
FLAGS=(
  # [https://github.com/irfanstract/FFmpeg/actions/runs/4635661813/jobs/8203513910#step:6:4319] 
  -Xlinker -error-limit=0        # (don't forget the '-Xlinker' !!!)
  # 
  -I. -I./fftools -I$BUILD_DIR/include
  -Wno-deprecated-declarations -Wno-pointer-sign -Wno-implicit-int-float-conversion -Wno-switch -Wno-parentheses -Qunused-arguments
  -Xlinker "-\\(" # [https://stackoverflow.com/questions/45135/why-does-the-order-in-which-libraries-are-linked-sometimes-cause-errors-in-gcc] 
  -Llibavcodec -Llibavdevice -Llibavfilter -Llibavformat -Llibavresample -Llibavutil -Lharfbuzz -Llibass -Lfribidi -Llibpostproc -Llibswscale -Llibswresample -L$BUILD_DIR/lib
  -lavdevice -lavfilter -lavformat -lavcodec -lswresample -lswscale -lavutil -lpostproc -lm -lharfbuzz -lfribidi -lass -lx264 -lx265 -lvpx -lwavpack -lmp3lame -lfdk-aac -lvorbis -lvorbisenc -lvorbisfile -logg -ltheora -ltheoraenc -ltheoradec -lz -lfreetype -lopus -lwebp
  # note: in version 5 the 'fftools' listing changed
  fftools/objpool.c 
  fftools/sync_queue.c 
  fftools/thread_queue.c
  fftools/ffmpeg_demux.c       
  fftools/ffmpeg_mux.c        
  fftools/ffmpeg_mux_init.c   
  fftools/opt_common.c 
  # before version 5 :
  fftools/ffmpeg_opt.c fftools/ffmpeg_filter.c fftools/ffmpeg_hw.c fftools/cmdutils.c fftools/ffmpeg.c
  -Xlinker "-\\)"
  -s USE_SDL=2                                  # use SDL2
  -s INVOKE_RUN=0                               # not to run the main() in the beginning
  -s EXIT_RUNTIME=1                             # exit runtime after execution
  -s MODULARIZE=1                               # use modularized version to be more flexible
  -s EXPORT_NAME="createFFmpegCore"             # assign export name for browser
  -s EXPORTED_FUNCTIONS="$EXPORTED_FUNCTIONS"  # export main and proxy_main funcs
  -s EXPORTED_RUNTIME_METHODS="[FS, cwrap, ccall, setValue, writeAsciiToMemory, lengthBytesUTF8, stringToUTF8, UTF8ToString]"   # export preamble funcs
  --post-js wasm/src/post.js
  --pre-js wasm/src/pre.js
  $OPTIM_FLAGS
  ${EXTRA_FLAGS[@]}
)
echo "FFMPEG_EM_FLAGS=${FLAGS[@]}"
emmake make -j
emcc "${FLAGS[@]}"
