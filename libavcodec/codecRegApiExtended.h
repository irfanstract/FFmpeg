

#ifndef AVCODEC_CODECAPIEXTENDED_H
#define AVCODEC_CODECAPIEXTENDED_H






#include <stdint.h>






#include "libavutil/avutil.h"
#include "libavutil/hwcontext.h"
#include "libavutil/log.h"
#include "libavutil/pixfmt.h"
#include "libavutil/rational.h"
#include "libavutil/samplefmt.h"




#include "libavcodec/codec_id.h"
#include "libavcodec/version_major.h"

#include "libavcodec/codec_internal.h"





#include "codec.h"




/**
 * on-demand register a Codec
 * 
 * @note impl in `allListedCodecs.cpp`
 * 
 */
int av_codec_register(FFCodec * descRef) ;







#endif

