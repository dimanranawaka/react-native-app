import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';
import SplashScreen from './screens/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> : <MainNavigation />}
    </NavigationContainer>
  );
};

export default App;
