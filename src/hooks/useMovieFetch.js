import { useState, useEffect, useCallback } from 'react'
import { API_URL, API_KEY } from '../config'

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)

        try {
            const endpoint = `${API_URL}${movieId}&apikey=${API_KEY}`
            const result = await (await fetch(endpoint)).json();
            setState({
                ...result
            })

        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }, [movieId])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return [state, loading, error];
} 
