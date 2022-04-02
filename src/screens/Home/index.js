import React from 'react';
import { Wrap } from '@react-native-material/core';

import ButtonMusic from '../../components/ButtonMusic'
import { styles } from './styles';

export default function Home() {
    return (
        <Wrap style={styles.container}>
            <ButtonMusic value="Rock" color="#FFFC1A" />
            <ButtonMusic value="Sertanejo" color="#1CED1C" />
            <ButtonMusic value="POP" color="#EE82EE" />
            <ButtonMusic value="MPB" color="#0971B3" />
        </Wrap>
    );
}