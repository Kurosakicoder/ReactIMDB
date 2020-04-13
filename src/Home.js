import React, { useState, useEffect } from 'react';
//import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import MovieThumb from './elements/MovieThumb';
import Spinner from './elements/Spinner';
import { useHomeFetch } from './hooks/useHomeFetch'
import Grid from './elements/Grid';
import { SEARCH_BASE_URL, API_KEY, TOP_MOVIES } from '../src/config'

const Home = () => {

    const [{ state, loading, error }, fetchMovies] = useHomeFetch();
    //console.log(state.movies.Poster)
    const searchMovie = search => {
        const endpoint = search ? `${SEARCH_BASE_URL}${search}&apikey=${API_KEY}` : TOP_MOVIES
        fetchMovies(endpoint)
    }

    if (!state.movies[0]) {
        return (
            <Spinner />
        )
    }
    console.log(state)

    return (
        <React.Fragment>
            {/* <HeroImage
                image={state.heroImage.Poster}
                title={state.heroImage.Title}
            /> */}
            <SearchBar callback={searchMovie} />
            <br></br>
            <Grid>
                {state.movies.map(movie => (
                    <MovieThumb
                        key={movie.imdbID}
                        clickable
                        image={movie.Poster}
                        movieId={movie.imdbID}
                        movieName={movie.Title}
                    />
                ))
                }

            </Grid>
            {
                loading && <Spinner />
            }
        </React.Fragment >
    )
}

export default Home