import { useState, useEffect } from 'react';
import { TOP_MOVIES } from '../config';

export const useHomeFetch = () => {
    const [state, setState] = useState({ movies: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);

        try {
            const result = await (await fetch(endpoint)).json();
            console.log(result);
            setState(prev => ({
                ...prev,
                movies: [...result.Search],
                heroImage: prev.heroImage || result.Search[5],

            }))
        } catch (error) {
            setError(true)
        }
        setLoading(false)

    }

    useEffect(() => {
        fetchMovies(TOP_MOVIES);
    }, [])

    return [{ state, loading, error }, fetchMovies]

}