import React from 'react';
import { View } from 'react-native';
import { Wrap } from '@react-native-material/core';

import EventsButton from '../../components/EventsButton';
import ButtonMusic from '../../components/ButtonMusic';


import { styles } from './styles';

export default function Home() {
    return (
        <Wrap style={styles.container}>
            <View style={styles.firstLine}>
                <ButtonMusic color="#FFFC1A" value="Rock" />
                <ButtonMusic color="#0971B3" value="Mpb" />
            </View>
            <View style={styles.middleLine}>
                <EventsButton />
            </View>
            <View style={styles.lastLine}>
                <ButtonMusic color="#1CED1C" value="Sertanejo" />
                <ButtonMusic color="#EE82EE" value="Pop" />
            </View>
        </Wrap>
    );
}