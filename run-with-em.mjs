

// @ts-check
"use strict" ;

import {
  execSync,
  execFileSync,
} from "node:child_process" ;











const ffoDir = "./build/ff-ranwithemcp" ;


const files = (
  (/** @type {readonly String[] } */ ([
    ...(
      [
        "fftools/opt_common.c",
        "fftools/ffprobe.c",
        "fftools/ffplay.c",
        "fftools/ffmpeg_opt.c",
        "fftools/ffmpeg_mux.c",
        "fftools/ffmpeg_hw.c",
        "fftools/ffmpeg_filter.c",
        "fftools/ffmpeg.c",
        "fftools/cmdutils.c",
        "libavutil/xtea.c",
        "libavutil/xga_font_data.c",
        "libavutil/vulkan_shaderc.c",
        "libavutil/vulkan_glslang.c",
        "libavutil/vulkan.c",
        "libavutil/video_enc_params.c",
        "libavutil/version.c",
        "libavutil/uuid.c",
        "libavutil/utils.c",
        "libavutil/tx_template.c",
        "libavutil/tx_int32.c",
        "libavutil/tx_float.c",
        "libavutil/tx_double.c",
        "libavutil/tx.c",
        "libavutil/twofish.c",
        "libavutil/tree.c",
        "libavutil/timecode.c",
        "libavutil/time.c",
        "libavutil/threadmessage.c",
        "libavutil/tea.c",
        "libavutil/stereo3d.c",
        "libavutil/spherical.c",
        "libavutil/slicethread.c",
        "libavutil/sha512.c",
        "libavutil/sha.c",
        "libavutil/samplefmt.c",
        "libavutil/ripemd.c",
        "libavutil/reverse.c",
        "libavutil/rc4.c",
        "libavutil/rational.c",
        "libavutil/random_seed.c",
        "libavutil/pixelutils.c",
        "libavutil/pixdesc.c",
        "libavutil/pca.c",
        "libavutil/parseutils.c",
        "libavutil/opt.c",
        "libavutil/murmur3.c",
        "libavutil/mem.c",
        "libavutil/md5.c",
        "libavutil/mathematics.c",
        "libavutil/mastering_display_metadata.c",
        "libavutil/macos_kperf.c",
        "libavutil/lzo.c",
        "libavutil/log2_tab.c",
        "libavutil/log.c",
        "libavutil/lls.c",
        "libavutil/lfg.c",
        "libavutil/intmath.c",
        "libavutil/integer.c",
        "libavutil/imgutils.c",
        "libavutil/hwcontext_vulkan.c",
        "libavutil/hwcontext_videotoolbox.c",
        "libavutil/hwcontext_vdpau.c",
        "libavutil/hwcontext_vaapi.c",
        "libavutil/hwcontext_stub.c",
        "libavutil/hwcontext_qsv.c",
        "libavutil/hwcontext_opencl.c",
        "libavutil/hwcontext_mediacodec.c",
        "libavutil/hwcontext_dxva2.c",
        "libavutil/hwcontext_drm.c",
        "libavutil/hwcontext_d3d11va.c",
        "libavutil/hwcontext_cuda.c",
        "libavutil/hwcontext.c",
        "libavutil/hmac.c",
        "libavutil/hdr_dynamic_vivid_metadata.c",
        "libavutil/hdr_dynamic_metadata.c",
        "libavutil/hash.c",
        "libavutil/frame.c",
        "libavutil/float_dsp.c",
        "libavutil/fixed_dsp.c",
        "libavutil/film_grain_params.c",
        "libavutil/file_open.c",
        "libavutil/file.c",
        "libavutil/fifo.c",
        "libavutil/eval.c",
        "libavutil/error.c",
        "libavutil/encryption_info.c",
        "libavutil/downmix_info.c",
        "libavutil/dovi_meta.c",
        "libavutil/display.c",
        "libavutil/dict.c",
        "libavutil/detection_bbox.c",
        "libavutil/des.c",
        "libavutil/csp.c",
        "libavutil/crc.c",
        "libavutil/cpu.c",
        "libavutil/color_utils.c",
        "libavutil/channel_layout.c",
        "libavutil/cast5.c",
        "libavutil/camellia.c",
        "libavutil/buffer.c",
        "libavutil/bprint.c",
        "libavutil/blowfish.c",
        "libavutil/base64.c",
        "libavutil/avstring.c",
        "libavutil/avsscanf.c",
        "libavutil/audio_fifo.c",
        "libavutil/aes_ctr.c",
        "libavutil/aes.c",
        "libavutil/adler32.c",
        "libavutil/x86/tx_float_init.c",
        "libavutil/x86/pixelutils_init.c",
        "libavutil/x86/lls_init.c",
        "libavutil/x86/imgutils_init.c",
        "libavutil/x86/float_dsp_init.c",
        "libavutil/x86/fixed_dsp_init.c",
        "libavutil/x86/cpu.c",
        "libavutil/tests/xtea.c",
        "libavutil/tests/uuid.c",
        "libavutil/tests/utf8.c",
        "libavutil/tests/twofish.c",
        "libavutil/tests/tree.c",
        "libavutil/tests/tea.c",
        "libavutil/tests/softfloat.c",
        "libavutil/tests/sha512.c",
        "libavutil/tests/sha.c",
        "libavutil/tests/ripemd.c",
        "libavutil/tests/rational.c",
        "libavutil/tests/random_seed.c",
        "libavutil/tests/pixfmt_best.c",
        "libavutil/tests/pixelutils.c",
        "libavutil/tests/pixdesc.c",
        "libavutil/tests/pca.c",
        "libavutil/tests/parseutils.c",
        "libavutil/tests/opt.c",
        "libavutil/tests/murmur3.c",
        "libavutil/tests/md5.c",
        "libavutil/tests/lzo.c",
        "libavutil/tests/log.c",
        "libavutil/tests/lls.c",
        "libavutil/tests/lfg.c",
        "libavutil/tests/integer.c",
        "libavutil/tests/imgutils.c",
        "libavutil/tests/hwdevice.c",
        "libavutil/tests/hmac.c",
        "libavutil/tests/hash.c",
        "libavutil/tests/file.c",
        "libavutil/tests/fifo.c",
        "libavutil/tests/eval.c",
        "libavutil/tests/error.c",
        "libavutil/tests/encryption_info.c",
        "libavutil/tests/display.c",
        "libavutil/tests/dict.c",
        "libavutil/tests/des.c",
        "libavutil/tests/crc.c",
        "libavutil/tests/cpu_init.c",
        "libavutil/tests/cpu.c",
        "libavutil/tests/color_utils.c",
        "libavutil/tests/channel_layout.c",
        "libavutil/tests/cast5.c",
        "libavutil/tests/camellia.c",
        "libavutil/tests/bprint.c",
        "libavutil/tests/blowfish.c",
        "libavutil/tests/base64.c",
        "libavutil/tests/avstring.c",
        "libavutil/tests/audio_fifo.c",
        "libavutil/tests/aes_ctr.c",
        "libavutil/tests/aes.c",
        "libavutil/tests/adler32.c",
        "libavutil/ppc/float_dsp_vsx.c",
        "libavutil/ppc/float_dsp_init.c",
        "libavutil/ppc/float_dsp_altivec.c",
        "libavutil/ppc/cpu.c",
        "libavutil/mips/float_dsp_mips.c",
        "libavutil/mips/cpu.c",
        "libavutil/loongarch/cpu.c",
        "libavutil/arm/float_dsp_init_vfp.c",
        "libavutil/arm/float_dsp_init_neon.c",
        "libavutil/arm/float_dsp_init_arm.c",
        "libavutil/arm/cpu.c",
        "libavutil/aarch64/float_dsp_init.c",
        "libavutil/aarch64/cpu.c",
      ]
    ) ,
    //
  ]))
) ;


// execSync(`J:\\Dev\\emsdk\\upstream\\emscripten\\emcc ${files.join(" ") } -o ${ffoDir }/ffmpeg.js -sWASM=0 -std=c99 -I .\\ffbuildSubstituteHeaders -I . -I ./fftools -I ./libavutil -I ./libavfilter -I ./libavdevice -I ./libavformat -I ./libavcodec -sNODERAWFS -D_ISOC99_SOURCE -D_FILE_OFFSET_BITS=64 -D_LARGEFILE_SOURCE -U__STRICT_ANSI__ -D__USE_MINGW_ANSI_STDIO=1 -D__printf__=__gnu_printf__ -D_POSIX_C_SOURCE=200112 -D_XOPEN_SOURCE=600 -DPIC`) ;
execFileSync("J:\\Dev\\emsdk\\upstream\\emscripten\\emcc.bat", [
  /**
   * SRC AND DEST PATHS
   */
  ...files,
  "-o", ffoDir + "/ffmpeg.js",

  /**
   * LANGUAGE-VERSION AND LINKING
   */
  ...(
    [
      "-sWASM=0",
      // "-std=c99",
      "-std=c11",
      "-sNODERAWFS",
      "-D_ISOC99_SOURCE",
      "-D_FILE_OFFSET_BITS=64",
      "-D_LARGEFILE_SOURCE",
      "-U__STRICT_ANSI__",
      "-D__USE_MINGW_ANSI_STDIO=1",
      "-D__printf__=__gnu_printf__",
      "-D_POSIX_C_SOURCE=200112",
      "-D_XOPEN_SOURCE=600",
      "-DPIC",
      "-fPIC",
      "-fomit-frame-pointer",
      //-O3 -fno-math-errno -fno-signed-zeros -fno-tree-vectorize
      "-O3",
      "-fno-math-errno",
      "-fno-signed-zeros",
      "-fno-tree-vectorize",
    ]
  ) ,

  /**
   * APP DECLS
   */
  ...(
    [
      // "-include", "config.h",
      "-include", "ffbuildSubstituteHeaders/config.h",
      ...(
        [
          //
          "-iquote", "./ffbuildSubstituteHeaders",
        ]
      ) ,
      "-I",
      ".",
      ...(
        [
          //
          "-iquote", "./fftools",
          "-iquote", "./libavutil",
          "-iquote", "./libavfilter",
          "-iquote", "./libavdevice",
          "-iquote", "./libavformat",
          "-iquote", "./libavcodec",
        ]
      ) ,
      "-DHAVE_AV_CONFIG_H",
    ]
  ) ,

] , {
  stdio: ["inherit", "inherit", "inherit"] ,
}) ;





















