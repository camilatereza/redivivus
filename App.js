
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Wrap, Flex, Button, IconButton, Box, Provider, VStack  } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from "@react-native-material/core";
import { sortInstructions } from './src/assets/constants/instructions';
import { sortStarResource } from './src/assets/constants/star.resources';

export default function App() {
  
  // zero -> nenhum modal visivel
  // um -> apenas intruções visiveis
  // dois -> apenas recompensas visiveis
  const [visible, setVisible] = useState(0);
  const [instructions, setInstructions] = useState(sortInstructions());
  const [star,setStar]= useState(sortStarResource());


  let [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./src/assets/fonts/Lobster-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }



  return (
    <Provider>
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
          <Button onPress={() => setVisible(1)} compact uppercase variant="outlined" title="Play"></Button>
          <IconButton onPress={() => setVisible(2)} icon={props => <Icon  name="star" size={78} {...props} />} color="primary" />
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
      <Dialog visible={visible === 1} onDismiss={() => setVisible(0)}>
          <DialogHeader title="Escolha 3 jogadas" />
          <DialogContent>
            <VStack spacing={2} p={20} >
              {
                instructions.map(
                (item, index) => {
                  return <Flex inline key={index} >
                      <Icon name={item.icon} size={16}></Icon>
                      <Text>{item.text}</Text>
                    </Flex>
                })}
            </VStack>
          </DialogContent>
          <DialogActions>
            <Button
              title="Ok"
              compact
              variant="text"
              onPress={() => {
                setVisible(0);
                setTimeout(() =>setInstructions(sortInstructions()),1000)
              }}
            />
          </DialogActions>
        </Dialog>
      <Dialog visible={visible === 2} onDismiss={() => setVisible(0)}>
        <DialogHeader title="Jogada Estrela" />
        <DialogContent>
          <Flex>
            {
              <Box spacing={2} p={20}>
                  <Text>{star}</Text>
              </Box>
              }
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => {
              setVisible(0);
              setTimeout(() => setStar(sortStarResource()),1000)
            }}
          />
        </DialogActions>
      </Dialog>
      </Provider>
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
