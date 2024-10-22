

#ifndef ST_CPOLYFILLH_DEFINED
#define ST_CPOLYFILLH_DEFINED







#ifndef __MINGW_ATTRIB_DEPRECATED_SEC_WARN
#define __MINGW_ATTRIB_DEPRECATED_SEC_WARN /* deprecated */
#endif








#include <stdint.h>
#include <time.h>




// /* copied from 'corecrt.h' distrib-ed w MSYS2, with changes */

// #ifndef _TIME32_T_DEFINED
// #define _TIME32_T_DEFINED
// typedef int32_t __time32_t;
// #endif

// #ifndef _TIME64_T_DEFINED
// #define _TIME64_T_DEFINED
// /* what copied from there had '__MINGW_EXTENSION', but this is likely to be missing where run. */
// typedef int64_t __time64_t;
// #endif /* _TIME64_T_DEFINED */

// #ifndef _TIME_T_DEFINED
// #define _TIME_T_DEFINED
// #ifdef _USE_32BIT_TIME_T
// typedef __time32_t time_t;
// #else
// typedef __time64_t time_t;
// #endif
// #endif /* _TIME_T_DEFINED */





time_t eoeeeoooeeeooeeeeooo(void) ;

typedef int eoeeeoooeeeooeeeeooo_t ;








// #define __MINGW_ATTRIB_DEPRECATED_MSVC2005 1










//

#ifndef __CRTDECL
#define __CRTDECL __cdecl
#endif

/* temporary */
#include <stdlib.h>

#include <errno.h>
// #include <error.h>
// #include <errors.h>
#ifndef _ERRCODE_DEFINED
#define _ERRCODE_DEFINED
typedef int errno_t;
#endif










// // #include <io.h>

// #include <time.h>

// /* adopts MSYS2's GCC's def */
// #ifndef _TM_DEFINED
// #define _TM_DEFINED
//   struct tm {
//     int tm_sec;
//     int tm_min;
//     int tm_hour;
//     int tm_mday;
//     int tm_mon;
//     int tm_year;
//     int tm_wday;
//     int tm_yday;
//     int tm_isdst;
//   };
// #endif

// /* adopts MSYS2's GCC's def */
// #define CLOCKS_PER_SEC 1000

// #ifndef _CLOCK_T_DEFINED
// #define _CLOCK_T_DEFINED
//   // typedef long clock_t;
//   typedef int clock_t;  /* XXX EMSCRIPTEN: ensure it's always 32-bits even in wasm64 */
// #endif

// /* all these to adops MSYS2's GCC's def */ ;
// clock_t __cdecl clock(void);
// size_t __cdecl strftime(char * __restrict__ _Buf,size_t _SizeInBytes,const char * __restrict__ _Format,const struct tm * __restrict__ _Tm) __attribute__((__format__ (__MINGW_STRFTIME_FORMAT, 3, 0)));

//   errno_t __cdecl _get_daylight(int *_Daylight);
//   errno_t __cdecl _get_dstbias(long *_Daylight_savings_bias);
//   errno_t __cdecl _get_timezone(long *_Timezone);
//   errno_t __cdecl _get_tzname(size_t *_ReturnValue,char *_Buffer,size_t _SizeInBytes,int _Index);
//   char *__cdecl asctime(const struct tm *_Tm) __MINGW_ATTRIB_DEPRECATED_SEC_WARN;
//   errno_t __cdecl asctime_s (char *_Buf,size_t _SizeInWords,const struct tm *_Tm);
//   char *__cdecl _ctime32(const __time32_t *_Time) __MINGW_ATTRIB_DEPRECATED_SEC_WARN;
//   errno_t __cdecl _ctime32_s (char *_Buf,size_t _SizeInBytes,const __time32_t *_Time);
//   clock_t __cdecl clock(void);
//   double __cdecl _difftime32(__time32_t _Time1,__time32_t _Time2);
//   struct tm *__cdecl _gmtime32(const __time32_t *_Time) __MINGW_ATTRIB_DEPRECATED_SEC_WARN;
//   errno_t __cdecl _gmtime32_s (struct tm *_Tm,const __time32_t *_Time);
//   struct tm *__cdecl _localtime32(const __time32_t *_Time) __MINGW_ATTRIB_DEPRECATED_SEC_WARN;
//   errno_t __cdecl _localtime32_s (struct tm *_Tm,const __time32_t *_Time);
//   size_t __cdecl strftime(char * __restrict__ _Buf,size_t _SizeInBytes,const char * __restrict__ _Format,const struct tm * __restrict__ _Tm) __attribute__((__format__ (__MINGW_STRFTIME_FORMAT, 3, 0)));
//   // size_t __cdecl _strftime_l(char * __restrict__ _Buf,size_t _Max_size,const char * __restrict__ _Format,const struct tm * __restrict__ _Tm,_locale_t _Locale);
//   char *__cdecl _strdate(char *_Buffer) __MINGW_ATTRIB_DEPRECATED_SEC_WARN;
//   errno_t __cdecl _strdate_s (char *_Buf,size_t _SizeInBytes);
//   char *__cdecl _strtime(char *_Buffer) __MINGW_ATTRIB_DEPRECATED_SEC_WARN;
//   errno_t __cdecl _strtime_s (char *_Buf ,size_t _SizeInBytes);
//   __time32_t __cdecl _time32(__time32_t *_Time);
// #ifdef _UCRT
//   _CRTIMP int __cdecl _timespec32_get(struct _timespec32 *_Ts, int _Base);
// #endif
//   __time32_t __cdecl _mktime32(struct tm *_Tm);
//   __time32_t __cdecl _mkgmtime32(struct tm *_Tm);

// /* from emcc's def */; struct tm *gmtime_r (const time_t *__restrict, struct tm *__restrict);
// /* from emcc's def */; struct tm *localtime_r (const time_t *__restrict, struct tm *__restrict);

// /* temporary */
// #include <stdio.h>

// #ifndef _MODE_T_
// #define	_MODE_T_
// typedef unsigned mode_t;
// #endif

// // #include <stdlib.h>


// // write() ;

// #ifndef NO_OLDNAMES
//   int __cdecl access(const char *_Filename,int _AccessMode) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
// //   int __cdecl chmod(const char *_Filename,int _AccessMode) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl chsize(int _FileHandle,long _Size) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl close(int _FileHandle) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl creat(const char *_Filename,mode_t _PermissionMode) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl dup(int _FileHandle) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl dup2(int _FileHandleSrc,int _FileHandleDst) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl eof(int _FileHandle) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   long __cdecl filelength(int _FileHandle) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl isatty(int _FileHandle) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl locking(int _FileHandle,int _LockMode,long _NumOfBytes) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   off_t __cdecl lseek(int _FileHandle,off_t _Offset,int _Origin) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   char *__cdecl mktemp(char *_TemplateName)  /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl open(const char *_Filename,int _OpenFlag,...)  /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   ssize_t __cdecl read(int _FileHandle,void *_DstBuf,size_t _MaxCharCount)  /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl setmode(int _FileHandle,int _Mode) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   int __cdecl sopen(const char *_Filename,int _OpenFlag,int _ShareFlag,...) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   long __cdecl tell(int _FileHandle) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
// //   int __cdecl umask(int _Mode) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
//   ssize_t __cdecl write(int _Filehandle,const void *_Buf,size_t _MaxCharCount) /* __MINGW_ATTRIB_DEPRECATED_MSVC2005 */;
// #endif

// /*  https://stackoverflow.com/questions/15458393/implicit-declaration-of-function-time-wimplicit-function-declaration -- https://stackoverflow.com/a/73531219 */
// #ifdef _WIN32
// #include <sys/time.h>
// #else
// #include <time.h>
// #endif

// /* from 'time.h' in UCRT64 of MSYS2 */
// // #include <crtdefs.h>
// /* Adding timespec definition.  */
// #include <sys/timeb.h>

// #define STDKT_ENSURE_STDTIMEHFNCPOLYFILL 1

// #ifdef STDKT_ENSURE_STDTIMEHFNCPOLYFILL

// /* from 'time.h' in UCRT64 of MSYS2 */
// #ifdef _USE_32BIT_TIME_T
// static __inline time_t __CRTDECL time(time_t *_Time) ;
// #ifdef _UCRT
// static __inline int __CRTDECL timespec_get(struct timespec* _Ts, int _Base) { return _timespec32_get((struct _timespec32*)_Ts, _Base); }
// #endif
// static __inline double __CRTDECL difftime(time_t _Time1,time_t _Time2) ;
// static __inline struct tm *__CRTDECL localtime(const time_t *_Time) ;
// static __inline errno_t __CRTDECL localtime_s(struct tm *_Tm,const time_t *_Time) ;
// static __inline struct tm *__CRTDECL gmtime(const time_t *_Time) ;
// static __inline errno_t __CRTDECL gmtime_s(struct tm *_Tm, const time_t *_Time) ;
// // 
// #ifdef STDKT_ENSURE_STDTIMEHFNCPOLYFILL_EXTRAS
// static __inline char *__CRTDECL ctime(const time_t *_Time) { return _ctime32(_Time); }
// static __inline errno_t __CRTDECL ctime_s(char *_Buf,size_t _SizeInBytes,const time_t *_Time) { return _ctime32_s(_Buf,_SizeInBytes,_Time); }
// static __inline time_t __CRTDECL mktime(struct tm *_Tm) { return _mktime32(_Tm); }
// static __inline time_t __CRTDECL _mkgmtime(struct tm *_Tm) { return _mkgmtime32(_Tm); }
// // 
// #endif /* STDKT_ENSURE_STDTIMEHFNCPOLYFILL_EXTRAS */
// #else
// static __inline time_t __CRTDECL time(time_t *_Time) ;
// #ifdef _UCRT
// static __inline int __CRTDECL timespec_get(struct timespec* _Ts, int _Base) { return _timespec64_get((struct _timespec64*)_Ts, _Base); }
// #endif
// static __inline double __CRTDECL difftime(time_t _Time1,time_t _Time2) ;
// static __inline struct tm *__CRTDECL localtime(const time_t *_Time) ;
// static __inline errno_t __CRTDECL localtime_s(struct tm *_Tm,const time_t *_Time) ;
// static __inline struct tm *__CRTDECL gmtime(const time_t *_Time) ;
// static __inline errno_t __CRTDECL gmtime_s(struct tm *_Tm, const time_t *_Time) ;
// // 
// #ifdef STDKT_ENSURE_STDTIMEHFNCPOLYFILL_EXTRAS
// // 
// static __inline char *__CRTDECL ctime(const time_t *_Time) { return _ctime64(_Time); }
// static __inline errno_t __CRTDECL ctime_s(char *_Buf,size_t _SizeInBytes,const time_t *_Time) { return _ctime64_s(_Buf,_SizeInBytes,_Time); }
// static __inline time_t __CRTDECL mktime(struct tm *_Tm) { return _mktime64(_Tm); }
// static __inline time_t __CRTDECL _mkgmtime(struct tm *_Tm) { return _mkgmtime64(_Tm); }
// // 
// #endif /* STDKT_ENSURE_STDTIMEHFNCPOLYFILL_EXTRAS */
// #endif

// #endif /* STDKT_ENSURE_STDTIMEHFNCPOLYFILL */

// /* temporary workaround */
// /* just bring dn all, ahead */
// #include <stdlib.h>







//
void *_aligned_malloc(size_t _Size, size_t _Alignment) ;
void *_aligned_realloc(void *_Memory, size_t _Size, size_t _Alignment) ;
void _aligned_free(void *_Memory) ;











#endif


