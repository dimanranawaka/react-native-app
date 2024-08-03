import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Navbar from './Navbar';
import * as Animatable from 'react-native-animatable';
import Search from '../screens/Search';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerMode: 'screen'}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar navigation={navigation} main={true} />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar main={false} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar main={false} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  glowingEffect: {
    shadowColor: '#00E676', // Glowing color
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20, // For Android
  },
});

export default MainNavigation;
