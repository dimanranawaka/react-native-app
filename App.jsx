import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/550?api_key=2a2d4105c6f076353ee5274f587aa247',
  );
  console.log(JSON.stringify(response.data.results[0], null, 2));
};

const App = () => {
  getPopularMovies();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Diman Ranawaka!</Text>
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
