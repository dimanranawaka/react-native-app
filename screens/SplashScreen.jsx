import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('screen');

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="zoomIn"
        duration={3000}
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      {
        <Animatable.Text
          animation="fadeInUp"
          delay={1500}
          duration={1500}
          style={styles.subtitle}>
          by Diman Ranawaka
        </Animatable.Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: width,
    height: height,
  },
  logo: {
    width: 450,
    height: 450,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    fontFamily:
      Platform.OS === 'ios' ? 'HelveticaNeue-Light' : 'sans-serif-light',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
});

export default SplashScreen;
