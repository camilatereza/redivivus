import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Flex } from "@react-native-material/core";

import { styles } from './styles';

export default function ButtonMusic({ value, color }) {
    return (
        <Flex w={175} h={250} m={8}>
            <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        </Flex>
    );
}