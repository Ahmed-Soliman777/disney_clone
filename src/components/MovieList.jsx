import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

const MovieList = ({ genreId, index_ }) => {

    const [movieList, setMovieList] = useState([])

    const elementRef = useRef(null)

    useEffect(() => {
        getMovieByGenreId()
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results)
        })
    }

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }

    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }

    return (
        <div className="relative">
            <IoChevronBackOutline className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_ % 3 == 0 ? 'mt-[100px]' : 'mt-[150px]'}`} onClick={() => slideLeft(elementRef.current)} />
            <div className={`flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-10 scroll-smooth`} ref={elementRef}>
                {movieList.map((item, index) => (
                    <>
                        {index_ % 3 == 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </>
                ))}
            </div>
            <IoChevronForwardOutline className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${index_ % 3 == 0 ? 'mt-[100px]' : 'mt-[150px]'} `} onClick={() => slideRight(elementRef.current)} />
        </div>
    )
}

export default MovieList
