import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';
import { Flex, Dialog, DialogHeader, DialogContent, DialogActions, Box, Button } from "@react-native-material/core";


import { styles } from './styles';
import {sortStarResource} from "../../utils/star.resources";

export default function StarDialog({visibled }) {
    const [star, setStar] = useState([]);

    useEffect( () => {
        setStar(sortStarResource())
    },[star])
    return (
        <>
            <Dialog
                visible={ visibled }
                onDismiss={ () => {  } }>
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
                            visibled = false
                            setTimeout(() => setStar(sortStarResource()), 1000)
                        }}
                    />
                </DialogActions>
            </Dialog>
        </>

    );
}
