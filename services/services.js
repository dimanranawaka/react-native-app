import axios from 'axios';

// GET method to fetch popular movies
export const getPopularMovies = async () => {
    try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=2a2d4105c6f076353ee5274f587aa247',
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies: ', error);
        return [];
    }
};