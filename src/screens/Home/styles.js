import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: getStatusBarHeight() + 15,
    },
    firstLine: {
        flexDirection: 'row',
        width: '100%',
    },
    middleLine: {
        width: '100%',
    },
    lastLine: {
        flexDirection: 'row',
        width: '100%'
    }
});