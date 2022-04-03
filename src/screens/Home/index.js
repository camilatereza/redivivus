import React from 'react';
import { Wrap } from '@react-native-material/core';

import EventsButton from '../../components/EventsButton';

import { styles } from './styles';

export default function Home() {
    return (
        <Wrap style={styles.container}>
            <EventsButton />
        </Wrap>
    );
}