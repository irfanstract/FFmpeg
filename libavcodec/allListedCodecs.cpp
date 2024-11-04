







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
#include "config_components.h"
#include "libavutil/thread.h"
#include "codec.h"
#include "codec_id.h"
#include "codec_internal.h"

//
}

#include "libavutil/glpr.hpp"

extern "C" {
//

//
}

/**
 * init this item.
 * 
 */
static void av_codec_init_one(FFCodec* c )
{
    {
        if (c->init_static_data)
            c->init_static_data(c );
    }
}

AV_LSST_FOR_ASPECT(codec, FFCodec, descRef->p.name )

extern "C" {
//

#define codec_list (codec_list_impl + (std::vector<FFCodec const *> { NULL }) )

const AVCodec *av_codec_iterate(void **opaque)
{
    uintptr_t i = (uintptr_t)*opaque;
    const FFCodec *c = codec_list[i];

    av_codec_init_static() ;

    if (c) {
        *opaque = (void*)(i + 1);
        return &c->p;
    }
    return NULL;
}

static enum AVCodecID remap_deprecated_codec_id(enum AVCodecID id)
{
    switch(id){
        //This is for future deprecatec codec ids, its empty since
        //last major bump but will fill up again over time, please don't remove it
        default                                         : return id;
    }
}

static const AVCodec *find_codec(enum AVCodecID id, int (*x)(const AVCodec *))
{
    const AVCodec *p, *experimental = NULL;
    void *i = 0;

    id = remap_deprecated_codec_id(id);

    while ((p = av_codec_iterate(&i))) {
        if (!x(p))
            continue;
        if (p->id == id) {
            if (p->capabilities & AV_CODEC_CAP_EXPERIMENTAL && !experimental) {
                experimental = p;
            } else
                return p;
        }
    }

    return experimental;
}

const AVCodec *avcodec_find_encoder(enum AVCodecID id)
{
    return find_codec(id, av_codec_is_encoder);
}

const AVCodec *avcodec_find_decoder(enum AVCodecID id)
{
    return find_codec(id, av_codec_is_decoder);
}

static const AVCodec *find_codec_by_name(const char *name, int (*x)(const AVCodec *))
{
    void *i = 0;
    const AVCodec *p;

    if (!name)
        return NULL;

    while ((p = av_codec_iterate(&i))) {
        if (!x(p))
            continue;
        if (strcmp(name, p->name) == 0)
            return p;
    }

    return NULL;
}

const AVCodec *avcodec_find_encoder_by_name(const char *name)
{
    return find_codec_by_name(name, av_codec_is_encoder);
}

const AVCodec *avcodec_find_decoder_by_name(const char *name)
{
    return find_codec_by_name(name, av_codec_is_decoder);
}

//
}

extern "C" {
//

extern "C" {
//
}

//
}














