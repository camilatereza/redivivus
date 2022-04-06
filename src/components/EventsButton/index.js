import React from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, IconButton } from "@react-native-material/core";

import { styles } from './styles';
import OptionsDialog from '../OptionsDialog/index';

export default function EventsButton() {
    return (
        <>
            <View style={styles.container}>

                <IconButton style={styles.starButton} onPress={() => { }} icon={props => <Icon name="star" size={78} {...props} />} color="white" />

                <RectButton style={styles.playButton} onPress={() => { handlePlay() }}>
                    <Text style={styles.titleButton}>
                        Play
                    </Text>
                </RectButton>
            </View>
            <OptionsDialog visible={false} />
        </>

    );
}