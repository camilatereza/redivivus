import React from 'react';
import { View, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Wrap, Flex, Text } from "@react-native-material/core";

import { styles } from './styles';

export default function PlayButton() {
    return (
        <RectButton style={styles.container}>
            <Text style={styles.title}>
                Play
            </Text>
        </RectButton>
    );
}