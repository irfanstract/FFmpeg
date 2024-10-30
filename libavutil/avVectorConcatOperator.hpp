


#ifndef AVUTIL_VECTORCONCATOPERATOR_HPP
#define AVUTIL_VECTORCONCATOPERATOR_HPP







#include <vector>
// #include <string>
#include <iterator>





template <typename E>
static std::vector<E> operator +(std::vector<E> v0, std::vector<E> v2)
{
    std::vector<E> vDest ;
    for (auto c : v0 ) { vDest.push_back( c) ; }
    for (auto c : v2 ) { vDest.push_back( c) ; }
    return vDest ;
}







template <typename E>
static std::vector<E> av_from_nullterminated_1(E const * cdl )
{
    std::vector<E> dst ;

    for (int i = 0; cdl[i]; i++) {
        //
        dst.push_back(cdl[i] ) ;
    }

    return dst ;
}









#endif

