import React, { useState, useEffect } from 'react';
import { Text, Button, Flex, Dialog, DialogHeader, DialogContent, DialogActions, VStack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { styles } from './styles';
import { sortInstructions } from '../../utils/instructions';

export default function OptionsDialog({ visibled }) {

    var [instructions, setInstructions] = useState([]);
    var [visible, setVisible] = useState(visibled);

    useEffect(() => {
        setInstructions(sortInstructions());
    }, []);

    return (
        <Dialog visible={visibled} onDismiss={() => setVisible(0)}>
            <DialogHeader title="Escolha 3 jogadas" />
            <DialogContent>
                <VStack spacing={2} p={20} >
                    {
                        instructions.map(
                            (item, index) => {
                                return (
                                    <Flex inline key={index} >
                                        <Icon name={item.icon} size={120}></Icon>
                                        <Text>{item.text}</Text>
                                    </Flex>
                                );
                            })}
                </VStack>
            </DialogContent>
            <DialogActions>
                <Button
                    title="Ok"
                    compact
                    variant="text"
                    onPress={() => {
                        setVisible(0);
                        setTimeout(() => setInstructions(sortInstructions()), 1000)
                    }}
                />
            </DialogActions>
        </Dialog>
    );
}