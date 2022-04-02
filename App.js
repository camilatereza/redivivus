import React from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-web';
import { useFonts } from '@expo-google-fonts/inter';

import Home from './src/screens/Home';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./src/assets/fonts/Lobster-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Home />
  );
}
