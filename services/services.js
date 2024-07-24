import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=2a2d4105c6f076353ee5274f587aa247';

// GET method to fetch popular movies
export const getPopularMovies = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/movie/popular?${apiKey}`,
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies: ', error);
        return [];
    }
};

// GET method to fetch upcoming movies

export const getUpcomingMovies = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/movie/upcoming?${apiKey}`,
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching upcoming movies: ', error);
        return [];
    }
};