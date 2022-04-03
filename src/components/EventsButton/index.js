import React from 'react';
import { View, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Wrap, Flex, Text } from "@react-native-material/core";


import PlayButton from '../PlayButton';
import { styles } from './styles';

export default function EventsButton() {
    return (
        <View style={styles.container}>
            <PlayButton title="Play" />
            {/* <IconButton onPress={() => { }} icon={props => <Icon name="star" size={78} {...props} />} color="primary" /> */}
        </View>
    );
}