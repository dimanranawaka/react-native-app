import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home></Home>
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
