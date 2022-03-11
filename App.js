
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Wrap, Flex, Button, IconButton  } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./src/assets/fonts/Lobster-Regular.ttf')
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
      <Wrap justify="center" items="center" style={styles.wrapper}>
        <Flex w={'40%'} h={'38%'} mt={'20%'} mb={'20%'}>
          <TouchableOpacity
          style={[styles.button,styles.rock]}
        ><Text style={styles.text}>Rock</Text></TouchableOpacity></Flex>
        <Flex w={'40%'} h={'38%'} mt={'20%'}  mb={'20%'} ml={'5%'}>
          <TouchableOpacity
          style={[styles.button,styles.sertanejo]}
        ><Text style={styles.text}>Sertanejo</Text></TouchableOpacity></Flex>
        <Flex w={'100%'} h={'5%'} center="true">
          <Button compact uppercase variant="outlined" title="Play"></Button>
          <IconButton icon={props => <Icon name="star" size={78} {...props} />} color="primary" />
        </Flex>
        <Flex w={'40%'} h={'38%'} mt={'20%'}  mb={'20%'} >
          <TouchableOpacity
          style={[styles.button,styles.pop]}
        ><Text style={styles.text}>POP</Text></TouchableOpacity></Flex>
        <Flex w={'40%'} h={'38%'} mt={'20%'}  mb={'20%'} ml={'5%'}>
          <TouchableOpacity
          style={[styles.button,styles.mpb]}  
        ><Text style={styles.text}>MPB</Text></TouchableOpacity></Flex>
      </Wrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    fontFamily: 'Lobster-Regular'
  },
  button: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  rock:{
    backgroundColor: '#FFFC1A'
  },
  mpb: {
    backgroundColor: '#0971B3'
  },
  sertanejo: {
    backgroundColor: '#1CED1C'
  },
  pop: {
    backgroundColor: '#EE82EE'
  },
  text: {
    fontSize: 32,
    fontFamily: 'Lobster-Regular',
    color: '#000111'
  }
});
