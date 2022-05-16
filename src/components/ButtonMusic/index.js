import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Flex } from "@react-native-material/core";

import { styles } from './styles';
import {play} from "../../utils/music.service.util";

export default function ButtonMusic({ value, color }) {
    return (
        <Flex w={175} h={250} m={14} style={styles.container}>
            <TouchableOpacity activeOpacity={0.4} style={[styles.button, { backgroundColor: color }]} onPress={ () => { play(value) } }>
                <Text style={[styles.text]}>{value}</Text>
            </TouchableOpacity >
        </Flex>
    );
}
