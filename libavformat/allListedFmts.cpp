













#include "libavutil/avVectorExtraMethods.hpp"
#include "libavutil/avVectorConcatOperator.hpp"

// most C headers don't anticipate C++ usages
extern "C" {
//

#include <stdatomic.h>
//
}

#include "libavutil/glpr.hpp"






// most fflibs's C headers don't anticipate C++ usage
extern "C" {
//

#include "libavformat/internal.h"
#include "avformat.h"

}


extern "C" {
//

// extern AVOutputFormat  const  *const *const      initial_muxer_list ;
// extern AVInputFormat   const  *const *const    initial_demuxer_list ;


}

extern "C" {
//

// #define     muxer_list     muxer_list_initially
// #define   demuxer_list   demuxer_list_initially

static void         av_outputdev_init_one   (void* w) {}
static void          av_inputdev_init_one   (void* w) {}
static void             av_muxer_init_one   (void* w) {}
static void           av_demuxer_init_one   (void* w) {}

AV_LSST_FOR_ASPECT_IMPL(    muxer , AVOutputFormat, descRef->name )
AV_LSST_FOR_ASPECT_IMPL(  demuxer ,  AVInputFormat, descRef->name )

static atomic_uintptr_t initial_indev_list_intptr  = ATOMIC_VAR_INIT(0);
static atomic_uintptr_t initial_outdev_list_intptr = ATOMIC_VAR_INIT(0);

#define  initial_inputdev_list   ((AVInputFormat  const * const * )  initial_indev_list_intptr )
#define initial_outputdev_list   ((AVOutputFormat const * const * ) initial_outdev_list_intptr )


AV_LSST_FOR_ASPECT_IMPLWITHCUSTOMINILIST(    outputdev , AVOutputFormat, descRef->name )
AV_LSST_FOR_ASPECT_IMPLWITHCUSTOMINILIST(     inputdev , AVInputFormat , descRef->name )

// static std::vector<AVOutputFormat * >    odvs_now  {} ;
// static std::vector<AVInputFormat  * >   indvs_now  {} ;

#define av_muxeroroutdevs  (  muxer_list_impl +     outputdev_list_impl )
#define av_demuxeroridevs  (demuxer_list_impl +      inputdev_list_impl )

#include "libavdevice/avdevice.h"

static int av_init_mndvs_done = 0 ;
void av_init_mndvs(void)
{
    if (av_init_mndvs_done++) { return ; }
    av_log(NULL, AV_LOG_VERBOSE, "[av_init_mndvs] \n") ;

    {
        avdevice_register_all() ;
    }
    {
        av_muxer_init_static() ;
        av_demuxer_init_static() ;
        av_outputdev_init_static() ;
        av_inputdev_init_static() ;
    }
    if (0) {
        av_log(NULL, AV_LOG_VERBOSE, "[av_init_mndvs] i0: (%p) %s \n", inputdev_list_impl[0]->flags, inputdev_list_impl[0]->name ) ;
        av_log(NULL, AV_LOG_VERBOSE, "[av_init_mndvs] i0: (%p) %s \n", demuxer_list_impl[0]->flags, demuxer_list_impl[0]->name ) ;
    }
}

const AVOutputFormat *av_muxer_iterate(void **opaque)
{
    av_init_mndvs() ;
    static const uintptr_t size = av_muxeroroutdevs.size() ;
    uintptr_t i = (uintptr_t)*opaque;
    const AVOutputFormat *f = NULL;
    uintptr_t tmp;

    if (i < size) {
        f = av_muxeroroutdevs[i];
    }

    if (f)
        *opaque = (void*)(i + 1);
    return f;
}

const AVInputFormat *av_demuxer_iterate(void **opaque)
{
    av_init_mndvs() ;
    static const uintptr_t size = av_demuxeroridevs.size() ;
    uintptr_t i = (uintptr_t)*opaque;
    const AVInputFormat *f = NULL;
    uintptr_t tmp;

    if (i < size) {
        f = av_demuxeroridevs[i];
    }

    if (f)
        *opaque = (void*)(i + 1);
    return f;
}

void avpriv_register_devices(const AVOutputFormat * const o[], const AVInputFormat * const i[])
{
    av_log(NULL, AV_LOG_VERBOSE, "[avpriv_register_devices] \n") ;
    atomic_store_explicit(&initial_outdev_list_intptr, (uintptr_t)o, memory_order_relaxed);
    atomic_store_explicit(&initial_indev_list_intptr,  (uintptr_t)i, memory_order_relaxed);
}

//
}






