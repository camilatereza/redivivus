import React from 'react';
import { Text } from 'react-native';
import { Flex, Dialog, DialogHeader, DialogContent, DialogActions, Box, Button } from "@react-native-material/core";


import { styles } from './styles';

export default function StarDialog({ star, visibled }) {
    return (
        <Dialog onDismiss={() => setVisible(0)}>
            <DialogHeader title="Jogada Estrela" />
            <DialogContent>
                <Flex>
                    {
                        <Box spacing={2} p={20}>
                            <Text>{star}</Text>
                        </Box>
                    }
                </Flex>
            </DialogContent>
            <DialogActions>
                <Button
                    title="Ok"
                    compact
                    variant="text"
                    onPress={() => {
                        setVisible(0);
                        setTimeout(() => setStar(sortStarResource()), 1000)
                    }}
                />
            </DialogActions>
        </Dialog>
    );
}