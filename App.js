import React from 'react';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './src/screens/Home';

export default function App() {

  let [fontLoadded] = useFonts({
    Lobster_400Regular
  });

  if (!fontLoadded) return <AppLoading />;
  return (
    <Home />
  );
}
