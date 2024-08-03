import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

const propTypes = {
  main: PropTypes.bool,
};

const defaultProps = {
  main: false,
};

class Navbar extends React.PureComponent {
  state = {};
  render() {
    const {navigation, main} = this.props;
    return (
      <SafeAreaView>
        {main ? (
          <View style={styles.mainNav}>
            <Animatable.Image
              animation="pulse"
              iterationCount="infinite"
              style={[styles.logo, styles.glowingEffect]}
              source={require('../assets/images/movies.png')}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Icon name={'search-outline'} size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.backNav}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-back'} size={40} color={'#fff'} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainNav: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  backNav: {
    padding: 10,
  },
  glowingEffect: {
    shadowColor: '#00E676', // Glowing color
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20, // For Android
  },
});

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
