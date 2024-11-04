





#ifndef AVUTIL_GLPR_HPP
#define AVUTIL_GLPR_HPP















extern "C" {
//

#include <stdint.h>
#include <string.h>

//
#include <libavutil/avstring.h>

//
}

#include <vector>
#include <string>
#include <iterator>

#include "libavutil/avVectorExtraMethods.hpp"
#include "libavutil/avVectorConcatOperator.hpp"



extern "C" {
    //

#include <stdio.h>

    //
}

// most fflibs's C headers don't anticipate usage from C++
extern "C" {
//

#include <libavutil/log.h>

#include "config.h"
// #include "config_components.h"
#include "libavutil/thread.h"
// #include "codec.h"
// #include "codec_id.h"
// #include "codec_internal.h"

//
}

extern "C" {
//

//
}

#define AV_LSST_FOR_ASPECT(         codec, FFCodec, codecName)   AV_LSST_FOR_ASPECT_IMPL(codec, FFCodec, codecName) 
#define AV_LSST_FOR_ASPECT_IMPL(    codec, FFCodec, codecName)                                        \
    extern "C" {                                                                                      \
                                                                                                   \
    extern FFCodec const * const * const initial_ ## codec ## _list ;                                     \
                                                                                                    \
    }                                                                                                \
    AV_LSST_FOR_ASPECT_IMPLWITHCUSTOMINILIST(codec, FFCodec, codecName )                            \
    
#define AV_LSST_FOR_ASPECT_IMPLWITHCUSTOMINILIST(    codec, FFCodec, codecName)                     \
                                                                                                   \
    extern "C" {                                                                                      \
                                                                                                   \
                                                                                                    \
    static std::vector<FFCodec const *> codec ## _list_impl ;                                     \
                                                                                                    \
    static AVOnce av_ ## codec ## _static_init = AV_ONCE_INIT;                                    \
    static void av_ ## codec ## _init_static_impl(void)                                              \
    {                                                                                                \
        av_log(NULL, AV_LOG_VERBOSE, "[av_" #codec "_init_static_impl] \n") ;                       \
                                                                                                    \
        codec ## _list_impl = av_from_nullterminated_1(initial_ ## codec ## _list) ;               \
                                                                                                    \
        fprintf(stderr , "" #codec " count: %d ;" , codec ## _list_impl.size() ) ;                       \
        for (int i = 0; i < codec ## _list_impl.size() ; i++) {                                       \
            auto descRef = (FFCodec* ) codec ## _list_impl[i] ;                                          \
            fprintf(stderr , "" #codec " %d" , i ) ;                                                     \
            av_ ## codec ## _init_one(descRef ) ;                                                         \
            if (0) { fprintf(stderr , " (%s), " , codecName ) ; }                                                  \
        }                                                                                            \
        fprintf(stderr , "\n" ) ;                                                                   \
    }                                                                                                \
                                                                                                    \
    static void av_ ## codec ## _init_static(void) {                                                \
        ff_thread_once(&av_ ## codec ## _static_init, av_ ## codec ## _init_static_impl) ;            \
    }                                                                                                \
                                                                                                    \
    int av_ ## codec ## _register(FFCodec * descRef) {                                                     \
                                                                                                    \
                                                                                                       \
        av_log(NULL, AV_LOG_VERBOSE, "[av_" #codec "_register] late-registering " #codec " '%s' \n", codecName) ;                                                                                                \
                                                                                                    \
        av_ ## codec ## _init_one(descRef) ;                                                        \
                                                                                                    \
        codec ## _list_impl.push_back(descRef) ;                                                    \
                                                                                                    \
        ;                                                                                                \
        av_log(NULL, AV_LOG_VERBOSE, "[av_" #codec "_register] successfully late-registered " #codec " '%s' \n", codecName ) ;                                                                                               \
                                                                                                    \
        return 0 ;                                                                                  \
    }                                                                                                \
                                                                                                    \
                                                                                                   \
    }                                                                                                \
                                                                                                   \
    extern "C" {                                                                                      \
                                                                                                   \
    }                                                                                               \
                                                                                                    \
                                                                                                    \
                                                                                                    \
                                                                                                    \
    
    



#endif

