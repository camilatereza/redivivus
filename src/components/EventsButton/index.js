import React, {useState} from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
    Text,
    IconButton,
    Dialog,
    DialogHeader,
    DialogContent,
    Flex,
    Box,
    DialogActions, Button, VStack
} from "@react-native-material/core";

import { styles } from './styles';
import {sortStarResource} from "../../utils/star.resources";
import {sortInstructions} from "../../utils/instructions";

export default function EventsButton() {
    const [star, setStar] = useState(false);
    const [play, setPlay] = useState(false);
    const [instructions, setInstructions] = useState(sortInstructions());
    const [starstep, setStarstep] = useState(sortStarResource());

    function handlePlay() {
        setPlay(true);
    }

    function handleStar() {
        setStar(true);
    }
    return (
        <View style={styles.container}>
            <IconButton style={styles.starButton} onPress={() => { handleStar()} } icon={props => <Icon name="star" size={78} {...props} />} color="#fffddf" />
            <>
                <Dialog
                    visible={ star }
                    onDismiss={ () => { setStar(false) } }>
                    <DialogHeader title="Jogada Estrela" />
                    <DialogContent>
                        <Flex>
                            {
                                <Box spacing={2} p={20}>
                                    <Text>{starstep}</Text>
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
                                setStar(false)
                                setTimeout(() => setStarstep(sortStarResource()), 1000)
                            }}
                        />
                    </DialogActions>
                </Dialog>
            </>
            <Button style={styles.playButton} compact uppercase title="Play" underlayColor="green" onPress={() => { handlePlay() }}>
                <Text style={styles.titleButton}>
                    Play
                </Text>
            </Button>
            <>
                <Dialog visible={ play } onDismiss={() => { setPlay(false) }}>
                    <DialogHeader title="Escolha 3 jogadas" />
                    <DialogContent>
                        <VStack spacing={2} p={20} >
                            {
                                instructions.map(
                                    (item, index) => {
                                        return (
                                            <Flex inline key={index} >
                                                <Icon name={item.icon} size={30}></Icon>
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
                                setPlay(false);
                                setTimeout(() => setInstructions(sortInstructions()), 1000)
                            }}
                        />
                    </DialogActions>
                </Dialog>
            </>
        </View>
    );
}
