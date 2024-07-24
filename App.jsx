import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getPopularMovies} from './services/services';

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
        <>
          <Text style={styles.text}>Movie Name : {movie.original_title}</Text>
          <Text style={styles.text}>Language : {movie.original_language}</Text>
          <Text style={styles.text}>Release Date : {movie.release_date}</Text>
        </>
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
