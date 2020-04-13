import React from 'react';
import Navigation from './elements/Navigation';
import { useMovieFetch } from './hooks/useMovieFetch'
import Spinner from './elements/Spinner';
import MovieInfo from './elements/MovieInfo';

const Movie = ({ movieId }) => {

    const [movie, loading, error] = useMovieFetch(movieId)
    console.log(movie)
    if (error) {
        return <div>Something went wrong ...</div>
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <Navigation movie={movie.Title} />
            <MovieInfo
                image={movie.Poster}
                title={movie.Title}
                rating={movie.imdbRating}
                released={movie.Released}
                genre={movie.Genre}
                actor={movie.Actors}
                plot={movie.Plot}
                boxoffice={movie.BoxOffice}
                director={movie.Director}
                language={movie.Language}
                country={movie.Country}
            />
        </>
    )
}

export default Movie