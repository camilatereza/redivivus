
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Wrap, Box, Flex, Button } from '@react-native-material/core';

export default function App() {
  return (
      <Wrap justify="center" items="center" style={styles.wrapper}>
        <Flex w={'40%'} h={'38%'} mt={'20%'} mb={'20%'}>
          <TouchableOpacity
          style={[styles.button,styles.rock]}
        ><Text>Rock</Text></TouchableOpacity></Flex>
        <Flex w={'40%'} h={'38%'} mt={'20%'}  mb={'20%'} ml={'5%'}>
          <TouchableOpacity
          style={[styles.button,styles.sertanejo]}
        ><Text>Sertanejo</Text></TouchableOpacity></Flex>
        <Flex w={'100%'} h={'5%'} center="true">
          <Button variant="outlined" title="Gerar Jogada"></Button>
        </Flex>
        <Flex w={'40%'} h={'38%'} mt={'20%'}  mb={'20%'} >
          <TouchableOpacity
          style={[styles.button,styles.pop]}
        ><Text>POP</Text></TouchableOpacity></Flex>
        <Flex w={'40%'} h={'38%'} mt={'20%'}  mb={'20%'} ml={'5%'}>
          <TouchableOpacity
          style={[styles.button,styles.mpb]}  
        ><Text>MPB</Text></TouchableOpacity></Flex>
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
    backgroundColor: '#fff'
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
    backgroundColor: 'yellow'
  },
  mpb: {
    backgroundColor: 'blue'
  },
  sertanejo: {
    backgroundColor: 'green'
  },
  pop: {
    backgroundColor: 'pink'
  }
});
