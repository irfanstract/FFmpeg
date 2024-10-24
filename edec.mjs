





/// <reference lib="ES2023" />
// /// <reference lib="ESNext.Array" />




// @ts-check
"use strict" ;

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











const FFCONFIG_PRINTEDITEM = /\S+/g ;



/** @typedef {Readonly<({ kind: "c" } | { kind: "F" }) & { name: string } & ({ c: -1 } | { c: 1 }) | ({ kind: "fx" } ) & { name: string } & { c ?: never, }> } KNC */

const flgs = ((
  [
    ...(
      ((
        `aac                     amv                     dsd_msbf_planar         imm5                    mxpeg                   qoi                     tscc2
    aac_fixed               anm                     dsicinaudio             indeo2                  nellymoser              qpeg                    tta
    aac_latm                ansi                    dsicinvideo             indeo3                  notchlc                 qtrle                   twinvq
    aasc                    ape                     dss_sp                  indeo4                  nuv                     r10k                    txd
    ac3                     aptx                    dst                     indeo5                  on2avc                  r210                    ulti
    ac3_fixed               aptx_hd                 dvaudio                 interplay_acm           opus                    ra_144                  utvideo
    acelp_kelvin            arbc                    dvbsub                  interplay_dpcm          paf_audio               ra_288                  v210
    adpcm_4xm               argo                    dvdsub                  interplay_video         paf_video               ralf                    v210x
    adpcm_adx               ass                     dvvideo                 ipu                     pam                     rawvideo                v308
    adpcm_afc               asv1                    dxtory                  jacosub                 pbm                     realtext                v408
    adpcm_agm               asv2                    dxv                     jpeg2000                pcm_alaw                rl2                     v410
    adpcm_aica              atrac1                  eac3                    jpegls                  pcm_bluray              roq                     vb
    adpcm_argo              atrac3                  eacmv                   jv                      pcm_dvd                 roq_dpcm                vble
    adpcm_ct                atrac3al                eamad                   kgv1                    pcm_f16le               rpza                    vbn
    adpcm_dtk               atrac3p                 eatgq                   kmvc                    pcm_f24le               rv10                    vc1
    adpcm_ea                atrac3pal               eatgv                   lagarith                pcm_f32be               rv20                    vc1image
    adpcm_ea_maxis_xa       atrac9                  eatqi                   loco                    pcm_f32le               rv30                    vcr1
    adpcm_ea_r1             aura                    eightbps                m101                    pcm_f64be               rv40                    vmdaudio
    adpcm_ea_r2             aura2                   eightsvx_exp            mace3                   pcm_f64le               s302m                   vmdvideo
    adpcm_ea_r3             av1                     eightsvx_fib            mace6                   pcm_lxf                 sami                    vmnc
    adpcm_ea_xas            avrn                    escape124               magicyuv                pcm_mulaw               sanm                    vorbis
    adpcm_g722              avrp                    escape130               mdec                    pcm_s16be               sbc                     vp3
    adpcm_g726              avs                     evrc                    metasound               pcm_s16be_planar        scpr                    vp4
    adpcm_g726le            avui                    fastaudio               microdvd                pcm_s16le               sdx2_dpcm               vp5
    adpcm_ima_acorn         ayuv                    ffv1                    mimic                   pcm_s16le_planar        sga                     vp6
    adpcm_ima_alp           bethsoftvid             ffvhuff                 mjpeg                   pcm_s24be               sgi                     vp6a
    adpcm_ima_amv           bfi                     ffwavesynth             mjpegb                  pcm_s24daud             sgirle                  vp6f
    adpcm_ima_apc           bink                    fic                     mlp                     pcm_s24le               sheervideo              vp7
    adpcm_ima_apm           binkaudio_dct           fits                    mmvideo                 pcm_s24le_planar        shorten                 vp8
    adpcm_ima_cunning       binkaudio_rdft          flac                    mobiclip                pcm_s32be               simbiosis_imx           vp9
    adpcm_ima_dat4          bintext                 flic                    motionpixels            pcm_s32le               sipr                    vplayer
    adpcm_ima_dk3           bitpacked               flv                     movtext                 pcm_s32le_planar        siren                   vqa
    adpcm_ima_dk4           bmp                     fmvc                    mp1                     pcm_s64be               smackaud                wavpack
    adpcm_ima_ea_eacs       bmv_audio               fourxm                  mp1float                pcm_s64le               smacker                 webp
    adpcm_ima_ea_sead       bmv_video               fraps                   mp2                     pcm_s8                  smc                     webvtt
    adpcm_ima_iss           brender_pix             frwu                    mp2float                pcm_s8_planar           smvjpeg                 wmalossless
    adpcm_ima_moflex        c93                     g723_1                  mp3                     pcm_sga                 snow                    wmapro
    adpcm_ima_mtf           cavs                    g729                    mp3adu                  pcm_u16be               sol_dpcm                wmav1
    adpcm_ima_oki           ccaption                gdv                     mp3adufloat             pcm_u16le               sonic                   wmav2
    adpcm_ima_qt            cdgraphics              gem                     mp3float                pcm_u24be               sp5x                    wmavoice
    adpcm_ima_rad           cdtoons                 gif                     mp3on4                  pcm_u24le               speedhq                 wmv1
    adpcm_ima_smjpeg        cdxl                    gremlin_dpcm            mp3on4float             pcm_u32be               speex                   wmv2
    adpcm_ima_ssi           cfhd                    gsm                     mpc7                    pcm_u32le               srt                     wmv3
    adpcm_ima_wav           cinepak                 gsm_ms                  mpc8                    pcm_u8                  ssa                     wmv3image
    adpcm_ima_ws            clearvideo              h261                    mpeg1video              pcm_vidc                stl                     wnv1
    adpcm_ms                cljr                    h263                    mpeg2video              pcx                     subrip                  wrapped_avframe
    adpcm_mtaf              cllc                    h263i                   mpeg4                   pfm                     subviewer               ws_snd1
    adpcm_psx               comfortnoise            h263p                   mpegvideo               pgm                     subviewer1              xan_dpcm
    adpcm_sbpro_2           cook                    h264                    mpl2                    pgmyuv                  sunrast                 xan_wc3
    adpcm_sbpro_3           cpia                    hap                     msa1                    pgssub                  svq1                    xan_wc4
    adpcm_sbpro_4           cri                     hca                     msmpeg4v1               pgx                     svq3                    xbin
    adpcm_swf               cscd                    hcom                    msmpeg4v2               phm                     tak                     xbm
    adpcm_thp               cyuv                    hevc                    msmpeg4v3               photocd                 targa                   xface
    adpcm_thp_le            dca                     hnm4_video              msnsiren                pictor                  targa_y216              xl
    adpcm_vima              dds                     hq_hqa                  msp2                    pixlet                  text                    xma1
    adpcm_xa                derf_dpcm               hqx                     msrle                   pjs                     theora                  xma2
    adpcm_yamaha            dfa                     huffyuv                 mss1                    ppm                     thp                     xpm
    adpcm_zork              dfpwm                   hymt                    mss2                    prores                  tiertexseqvideo         xsub
    agm                     dirac                   iac                     msvideo1                prosumer                tiff                    xwd
    aic                     dnxhd                   idcin                   mszh                    psd                     tmv                     y41p
    alac                    dolby_e                 idf                     mts2                    ptx                     truehd                  ylc
    alias_pix               dpx                     iff_ilbm                mv30                    qcelp                   truemotion1             yop
    als                     dsd_lsbf                ilbc                    mvc1                    qdm2                    truemotion2             yuv4
    amrnb                   dsd_lsbf_planar         imc                     mvc2                    qdmc                    truemotion2rt           zero12v
    amrwb                   dsd_msbf                imm4                    mvdv                    qdraw                   truespeech
    
        `
      ).match(FFCONFIG_PRINTEDITEM ) ?? [] )
      .slice(0)
      .map(e => /** @satisfies {KNC} */ ({ kind: "c", name: e, c: -1, }))
    ) ,
    ...(
      ((
        `a64multi                aptx_hd                 flac                    opus                    pcm_s8                  rawvideo                ttml
a64multi5               ass                     flv                     pam                     pcm_s8_planar           roq                     utvideo
aac                     asv1                    g723_1                  pbm                     pcm_u16be               roq_dpcm                v210
ac3                     asv2                    gif                     pcm_alaw                pcm_u16le               rpza                    v308
ac3_fixed               avrp                    h261                    pcm_bluray              pcm_u24be               rv10                    v408
adpcm_adx               avui                    h263                    pcm_dvd                 pcm_u24le               rv20                    v410
adpcm_argo              ayuv                    h263p                   pcm_f32be               pcm_u32be               s302m                   vbn
adpcm_g722              bitpacked               huffyuv                 pcm_f32le               pcm_u32le               sbc                     vc2
adpcm_g726              bmp                     jpeg2000                pcm_f64be               pcm_u8                  sgi                     vorbis
adpcm_g726le            cfhd                    jpegls                  pcm_f64le               pcm_vidc                smc                     wavpack
adpcm_ima_alp           cinepak                 ljpeg                   pcm_mulaw               pcx                     snow                    webvtt
adpcm_ima_amv           cljr                    magicyuv                pcm_s16be               pfm                     sonic                   wmav1
adpcm_ima_apm           comfortnoise            mjpeg                   pcm_s16be_planar        pgm                     sonic_ls                wmav2
adpcm_ima_qt            dca                     mlp                     pcm_s16le               pgmyuv                  speedhq                 wmv1
adpcm_ima_ssi           dfpwm                   movtext                 pcm_s16le_planar        phm                     srt                     wmv2
adpcm_ima_wav           dnxhd                   mp2                     pcm_s24be               ppm                     ssa                     wrapped_avframe
adpcm_ima_ws            dpx                     mp2fixed                pcm_s24daud             prores                  subrip                  xbm
adpcm_ms                dvbsub                  mpeg1video              pcm_s24le               prores_aw               sunrast                 xface
adpcm_swf               dvdsub                  mpeg2video              pcm_s24le_planar        prores_ks               svq1                    xsub
adpcm_yamaha            dvvideo                 mpeg4                   pcm_s32be               qoi                     targa                   xwd
alac                    eac3                    msmpeg4v2               pcm_s32le               qtrle                   text                    y41p
alias_pix               ffv1                    msmpeg4v3               pcm_s32le_planar        r10k                    tiff                    yuv4
amv                     ffvhuff                 msvideo1                pcm_s64be               r210                    truehd
aptx                    fits                    nellymoser              pcm_s64le               ra_144                  tta

    
        `
      ).match(FFCONFIG_PRINTEDITEM ) ?? [] )
      .slice(0)
      .map(e => /** @satisfies {KNC} */ ({ kind: "c", name: e, c: 1, }))
    ) ,
    ...(
      ((
        `  aa                      bitpacked               g726le                  image_psd_pipe          mpc8                    pcm_vidc                sup
aac                     bmv                     g729                    image_qdraw_pipe        mpegps                  pjs                     svag
aax                     boa                     gdv                     image_qoi_pipe          mpegts                  pmp                     svs
ac3                     brstm                   genh                    image_sgi_pipe          mpegtsraw               pp_bnk                  swf
ace                     c93                     gif                     image_sunrast_pipe      mpegvideo               pva                     tak
acm                     caf                     gsm                     image_svg_pipe          mpjpeg                  pvf                     tedcaptions
act                     cavsvideo               gxf                     image_tiff_pipe         mpl2                    qcp                     thp
adf                     cdg                     h261                    image_vbn_pipe          mpsub                   r3d                     threedostr
adp                     cdxl                    h263                    image_webp_pipe         msf                     rawvideo                tiertexseq
ads                     cine                    h264                    image_xbm_pipe          msnwc_tcp               realtext                tmv
adx                     codec2                  hca                     image_xpm_pipe          msp                     redspark                truehd
aea                     codec2raw               hcom                    image_xwd_pipe          mtaf                    rl2                     tta
afc                     concat                  hevc                    ingenient               mtv                     rm                      tty
aiff                    data                    hls                     ipmovie                 musx                    roq                     txd
aix                     daud                    hnm                     ipu                     mv                      rpl                     ty
alp                     dcstr                   ico                     ircam                   mvi                     rsd                     v210
amr                     derf                    idcin                   iss                     mxf                     rso                     v210x
amrnb                   dfa                     idf                     iv8                     mxg                     rtp                     vag
amrwb                   dfpwm                   iff                     ivf                     nc                      rtsp                    vc1
anm                     dhav                    ifv                     ivr                     nistsphere              s337m                   vc1t
apc                     dirac                   ilbc                    jacosub                 nsp                     sami                    vividas
ape                     dnxhd                   image2                  jv                      nsv                     sap                     vivo
apm                     dsf                     image2_alias_pix        kux                     nut                     sbc                     vmd
apng                    dsicin                  image2_brender_pix      kvag                    nuv                     sbg                     vobsub
aptx                    dss                     image2pipe              live_flv                obu                     scc                     voc
aptx_hd                 dts                     image_bmp_pipe          lmlm4                   ogg                     scd                     vpk
aqtitle                 dtshd                   image_cri_pipe          loas                    oma                     sdp                     vplayer
argo_asf                dv                      image_dds_pipe          lrc                     paf                     sdr2                    vqf
argo_brp                dvbsub                  image_dpx_pipe          luodat                  pcm_alaw                sds                     w64
argo_cvg                dvbtxt                  image_exr_pipe          lvf                     pcm_f32be               sdx                     wav
asf                     dxa                     image_gem_pipe          lxf                     pcm_f32le               segafilm                wc3
asf_o                   ea                      image_gif_pipe          m4v                     pcm_f64be               ser                     webm_dash_manifest
ass                     ea_cdata                image_j2k_pipe          matroska                pcm_f64le               sga                     webvtt
ast                     eac3                    image_jpeg_pipe         mca                     pcm_mulaw               shorten                 wsaud
au                      epaf                    image_jpegls_pipe       mcc                     pcm_s16be               siff                    wsd
av1                     ffmetadata              image_jpegxl_pipe       mgsts                   pcm_s16le               simbiosis_imx           wsvqa
avi                     filmstrip               image_pam_pipe          microdvd                pcm_s24be               sln                     wtv
avr                     fits                    image_pbm_pipe          mjpeg                   pcm_s24le               smacker                 wv
avs                     flac                    image_pcx_pipe          mjpeg_2000              pcm_s32be               smjpeg                  wve
avs2                    flic                    image_pfm_pipe          mlp                     pcm_s32le               smush                   xa
avs3                    flv                     image_pgm_pipe          mlv                     pcm_s8                  sol                     xbin
bethsoftvid             fourxm                  image_pgmyuv_pipe       mm                      pcm_u16be               sox                     xmv
bfi                     frm                     image_pgx_pipe          mmf                     pcm_u16le               spdif                   xvag
bfstm                   fsb                     image_phm_pipe          mods                    pcm_u24be               srt                     xwma
bink                    fwse                    image_photocd_pipe      moflex                  pcm_u24le               stl                     yop
binka                   g722                    image_pictor_pipe       mov                     pcm_u32be               str                     yuv4mpegpipe
bintext                 g723_1                  image_png_pipe          mp3                     pcm_u32le               subviewer
bit                     g726                    image_ppm_pipe          mpc                     pcm_u8                  subviewer1


    
        `
      ).match(FFCONFIG_PRINTEDITEM ) ?? [] )
      .slice(0)
      .map(e => /** @satisfies {KNC} */ ({ kind: "F", name: e, c: -1, }))
    ) ,
    ...(
      ((
        `  a64                     caf                     g723_1                  m4v                     null                    pcm_u32be               sup
ac3                     cavsvideo               g726                    matroska                nut                     pcm_u32le               swf
adts                    codec2                  g726le                  matroska_audio          obu                     pcm_u8                  tee
adx                     codec2raw               gif                     md5                     oga                     pcm_vidc                tg2
aiff                    crc                     gsm                     microdvd                ogg                     psp                     tgp
alp                     dash                    gxf                     mjpeg                   ogv                     rawvideo                truehd
amr                     data                    h261                    mkvtimestamp_v2         oma                     rm                      tta
amv                     daud                    h263                    mlp                     opus                    roq                     ttml
apm                     dfpwm                   h264                    mmf                     pcm_alaw                rso                     uncodedframecrc
apng                    dirac                   hash                    mov                     pcm_f32be               rtp                     vc1
aptx                    dnxhd                   hds                     mp2                     pcm_f32le               rtp_mpegts              vc1t
aptx_hd                 dts                     hevc                    mp3                     pcm_f64be               rtsp                    voc
argo_asf                dv                      hls                     mp4                     pcm_f64le               sap                     w64
argo_cvg                eac3                    ico                     mpeg1system             pcm_mulaw               sbc                     wav
asf                     f4v                     ilbc                    mpeg1vcd                pcm_s16be               scc                     webm
asf_stream              ffmetadata              image2                  mpeg1video              pcm_s16le               segafilm                webm_chunk
ass                     fifo_test               image2pipe              mpeg2dvd                pcm_s24be               segment                 webm_dash_manifest
ast                     filmstrip               ipod                    mpeg2svcd               pcm_s24le               smjpeg                  webp
au                      fits                    ircam                   mpeg2video              pcm_s32be               smoothstreaming         webvtt
avi                     flac                    ismv                    mpeg2vob                pcm_s32le               sox                     wsaud
avif                    flv                     ivf                     mpegts                  pcm_s8                  spdif                   wtv
avm2                    framecrc                jacosub                 mpjpeg                  pcm_u16be               spx                     wv
avs2                    framehash               kvag                    mxf                     pcm_u16le               srt                     yuv4mpegpipe
avs3                    framemd5                latm                    mxf_d10                 pcm_u24be               stream_segment
bit                     g722                    lrc                     mxf_opatom              pcm_u24le               streamhash


    
        `
      ).match(FFCONFIG_PRINTEDITEM ) ?? [] )
      .slice(0)
      .map(e => /** @satisfies {KNC} */ ({ kind: "F", name: e, c:  1, }))
    ) ,

    //

    ...(
      ((
        `  abench                  apad                    chromashift             entropy                 join                    prewitt                 spectrumsynth
abitscope               aperms                  ciescope                epx                     kirsch                  pseudocolor             speechnorm
acompressor             aphasemeter             codecview               equalizer               lagfun                  psnr                    split
acontrast               aphaser                 color                   erosion                 latency                 qp                      sr
acopy                   aphaseshift             colorbalance            estdif                  lenscorrection          random                  ssim
acrossfade              apsyclip                colorchannelmixer       exposure                life                    readeia608              stereotools
acrossover              apulsator               colorchart              extractplanes           limitdiff               readvitc                stereowiden
acrusher                arealtime               colorcontrast           extrastereo             limiter                 realtime                streamselect
acue                    aresample               colorcorrect            fade                    loop                    remap                   superequalizer
addroi                  areverse                colorhold               feedback                loudnorm                removegrain             surround
adeclick                arnndn                  colorize                fftdnoiz                lowpass                 removelogo              swaprect
adeclip                 asdr                    colorkey                fftfilt                 lowshelf                replaygain              swapuv
adecorrelate            asegment                colorlevels             field                   lumakey                 reverse                 tblend
adelay                  aselect                 colormap                fieldhint               lut                     rgbashift               telecine
adenorm                 asendcmd                colorspace              fieldmatch              lut1d                   rgbtestsrc              testsrc
aderivative             asetnsamples            colorspectrum           fieldorder              lut2                    roberts                 testsrc2
adrawgraph              asetpts                 colortemperature        fifo                    lut3d                   rotate                  thistogram
adynamicequalizer       asetrate                compand                 fillborders             lutrgb                  scale                   threshold
adynamicsmooth          asettb                  compensationdelay       firequalizer            lutyuv                  scale2ref               thumbnail
aecho                   ashowinfo               concat                  flanger                 mandelbrot              scdet                   tile
aemphasis               asidedata               convolution             floodfill               maskedclamp             scharr                  tiltshelf
aeval                   asoftclip               convolve                format                  maskedmax               scroll                  tlut2
aevalsrc                aspectralstats          copy                    fps                     maskedmerge             segment                 tmedian
aexciter                asplit                  crop                    framepack               maskedmin               select                  tmidequalizer
afade                   astats                  crossfeed               framerate               maskedthreshold         selectivecolor          tmix
afftdn                  astreamselect           crystalizer             framestep               maskfun                 sendcmd                 tonemap
afftfilt                asubboost               cue                     freezedetect            mcompand                separatefields          tpad
afifo                   asubcut                 curves                  freezeframes            median                  setdar                  transpose
afir                    asupercut               datascope               gblur                   mergeplanes             setfield                treble
afirsrc                 asuperpass              dblur                   geq                     mestimate               setparams               tremolo
aformat                 asuperstop              dcshift                 gradfun                 metadata                setpts                  trim
afreqshift              atadenoise              dctdnoiz                gradients               midequalizer            setrange                unpremultiply
afwtdn                  atempo                  deband                  graphmonitor            minterpolate            setsar                  unsharp
agate                   atilt                   deblock                 grayworld               mix                     settb                   untile
agraphmonitor           atrim                   decimate                greyedge                monochrome              shear                   v360
ahistogram              avectorscope            deconvolve              guided                  morpho                  showcqt                 varblur
aiir                    avgblur                 dedot                   haas                    movie                   showfreqs               vectorscope
aintegral               avsynctest              deesser                 haldclut                msad                    showinfo                vflip
ainterleave             axcorrelate             deflate                 haldclutsrc             multiply                showpalette             vfrdet
alatency                bandpass                deflicker               hdcd                    negate                  showspatial             vibrance
alimiter                bandreject              dejudder                headphone               nlmeans                 showspectrum            vibrato
allpass                 bass                    derain                  hflip                   noformat                showspectrumpic         vif
allrgb                  bbox                    deshake                 highpass                noise                   showvolume              vignette
allyuv                  bench                   despill                 highshelf               normalize               showwaves               virtualbass
aloop                   bilateral               detelecine              hilbert                 null                    showwavespic            vmafmotion
alphaextract            biquad                  dialoguenhance          histogram               nullsink                shuffleframes           volume
alphamerge              bitplanenoise           dilation                hqx                     nullsrc                 shufflepixels           volumedetect
amerge                  blackdetect             displace                hstack                  oscilloscope            shuffleplanes           vstack
ametadata               blend                   dnn_classify            hsvhold                 overlay                 sidechaincompress       w3fdif
amix                    blockdetect             dnn_detect              hsvkey                  pad                     sidechaingate           waveform
amovie                  blurdetect              dnn_processing          hue                     pal100bars              sidedata                weave
amplify                 bm3d                    doubleweave             huesaturation           pal75bars               sierpinski              xbr
amultiply               bwdif                   drawbox                 hwdownload              palettegen              signalstats             xcorrelate
anequalizer             cas                     drawgraph               hwmap                   paletteuse              silencedetect           xfade
anlmdn                  cellauto                drawgrid                hwupload                pan                     silenceremove           xmedian
anlmf                   channelmap              drmeter                 hysteresis              perms                   sinc                    xstack
anlms                   channelsplit            dynaudnorm              identity                photosensitivity        sine                    yadif
anoisesrc               chorus                  earwax                  idet                    pixdesctest             siti                    yaepblur
anull                   chromahold              ebur128                 il                      pixelize                smptebars               yuvtestsrc
anullsink               chromakey               edgedetect              inflate                 pixscope                smptehdbars             zoompan
anullsrc                chromanr                elbg                    interleave              premultiply             sobel


    
        `
      ).match(FFCONFIG_PRINTEDITEM ) ?? [] )
      .slice(0)
      .map(e => /** @satisfies {KNC} */ ({ kind: "fx", name: e, }))
    ) ,
  ]
  .map(({ name: e, kind, c, }) => {
    if (kind === "c" || kind === "F") {
      ;
      const tag = (
        (/** @satisfies {() => (`${"de" | "en"}coder` | `${"de" | ""}muxer` ) } */ (() => {
          ;
          if (kind === "c" && c === -1 ) { return "decoder" ; }
          if (kind === "c" && c ===  1 ) { return "encoder" ; }
          if (kind === "F" && c === -1 ) { return "demuxer" ; }
          if (kind === "F" && c ===  1 ) { return   "muxer" ; }
          throw new TypeError(kind) ;
        }))()
      ) ;
      if (1) {
        C :
        {
          if (e.match(/^(raw)/) ) { break C ; }
          if (e.match(/(yuv)/) ) { break C ; }
          if (e.match(/^(pc)/) ) { break C ; }

          if (e.match(/^(aa)/) ) { break C ; }
          if (e.match(/^(amr|mp\d)/) ) { break C ; }
          if (e.match(/^(vo|spe|opu)/) ) { break C ; }
          if (e.match(/^(ansi)/) ) { break C ; }
          if (e.match(/^([am]?png|[am]?jpe?g|tiff|h2|webp|vp.?)/) ) { break C ; }

          if (e.match(/^(img|image)/) ) { break C ; }
          if (e.match(/^(mp(e?g|\d+)|mov|flv)/) ) { break C ; }
          if (e.match(/^(og[gv])/) ) { break C ; }
          if (e.match(/^(matroska|mk[av]|webm)/) ) { break C ; }

          if (e.match(/^(mp(jpe?g|png))/) ) { break C ; }
          if (e.match(/^(concat)/) ) { break C ; }

          return `--disable-${tag }=${e}`
        }
        return `--enable-${tag }=${e}`
      }
    }

    if (kind === "fx") {
      ;
      const tag = "filter";
      ;
      C :
      {
        D:
        {
          ;
          if (e.match(/^(de)/) ) { break D ; }
          if (e.match(/^(mask)/) ) { break D ; }
          if (e.match(/^(\w+detect)/) ) { break D ; }

          if (e.match(/^(dnn)/) ) { break D ; }

          break C ;
        }

        return `--disable-${tag }=${e}` ;
      }
      return `--enable-${tag }=${e}` ;
    }

    return "" ;
  })
  .filter(e => e )
  .toSorted()
)) ;


const generatedFPath = (
  Path.join(import.meta.dirname, "build", "edecs.sh" )
) ;

const c0 = (
  (flgs.map(e => e.padEnd("--disable-decoder=wrapped_avframe".length, " ") ).map(e => ("  " + e) ).join("\r\n") )
  // .replaceAll(/\s+/g, " ")
) ;

if (1) {
  ;
  writeFileSync(generatedFPath, `
# GENERATED -- CHANGES WILL GO AWAY; DON'T EDIT!
DFLAGS=(
${c0 }
)
    ` , { encoding: "utf8", } ) ;
  console["info"](`please check out ${Path.relative(process.cwd() , generatedFPath ) }`) ;
} else {
  ;
  process.stdout.write((
    c0
  )) ;
  process.stdout.write("\r\n") ;
}
































