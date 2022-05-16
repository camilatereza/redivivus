import React from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, IconButton } from "@react-native-material/core";

import { styles } from './styles';
import OptionsDialog from '../OptionsDialog/index';
import StarDialog from '../StarDialog';

export default function EventsButton() {
    return (
        <View style={styles.container}>
            <IconButton style={styles.starButton} onPress={() => { }} icon={props => <Icon name="star" size={78} {...props} />} color="#fffddf" />
            <RectButton style={styles.playButton} underlayColor="green" onPress={() => { handlePlay() }}>
                <Text style={styles.titleButton}>
                    Play
                </Text>
            </RectButton>
            <OptionsDialog />
        </View>
    );
}