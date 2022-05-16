import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
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
        marginLeft: 0
    },
    titleButton: {
        flex: 1,
        color: '#fffddf',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    starButton: {
        backgroundColor: '#253fce'
    }
});