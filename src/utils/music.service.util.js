
import { Audio } from 'expo-av';
import {useState} from "react";
import Expo from 'expo';

const audio = {
    filename: 'My Awesome Audio',
    uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
};

const source = {
    mpb: require('../assets/audio/mpb.mp3'),
    sertanejo: require('../assets/audio/sertanejo.mp3'),
    pop: require('../assets/audio/pop.mp3'),
    rock: require('../assets/audio/rock.mp3')

}
export async function play(type) {

    const playback = new Audio.Sound();

    await playback.loadAsync(source[type.toLowerCase()])

    await playback.playAsync();

    setTimeout( ()=>{
        playback.pauseAsync();
    },10000)

};
