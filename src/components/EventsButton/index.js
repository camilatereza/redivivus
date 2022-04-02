import React from 'react';
import { View, Button } from 'react-native'
import { Wrap, Flex } from "@react-native-material/core";

import ButtonMusic from '../../components/ButtonMusic';
import { styles } from './styles';

export default function EventsButton() {
    return (
        <View style={styles.container}>
            <Flex w={'100%'} h={'5%'} center="true">
                <Button onPress={() => { }} compact uppercase variant="outlined" title="Play"></Button>
                {/* <IconButton onPress={() => { }} icon={props => <Icon name="star" size={78} {...props} />} color="primary" /> */}
            </Flex>
        </View>
    );
}