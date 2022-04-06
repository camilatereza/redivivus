import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    playButton: {
        width: 65,
        height: 45,
        backgroundColor: '#253fce',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1
    },
    titleButton: {
        flex: 1,
        color: '#fffddf',
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    starButton: {
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#253fce'
    }
});