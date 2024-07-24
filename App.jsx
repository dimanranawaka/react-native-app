import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
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

const App = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getPopularMovies().then(movies => {
      if (movies.length > 0) {
        setMovie(movies[0]);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {movie ? (
        <Text style={styles.text}>{movie.original_title}</Text>
      ) : (
        <Text style={styles.text}>No movie found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
