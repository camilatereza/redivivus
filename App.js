import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './src/screens/Home';

export default function App() {

  let [fontLoadded] = useFonts({
    'Lobster-Regular': require('./src/assets/fonts/Lobster-Regular.ttf')
  });


  if (!fontLoadded) return <AppLoading />;
  return (
    <>
      <Home />
    </>
  );
}
