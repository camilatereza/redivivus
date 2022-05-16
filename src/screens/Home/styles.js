import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffddf',
        marginTop: getStatusBarHeight() + 5,
    },
    firstLine: {
        paddingLeft: 5,
        paddingTop: 20,
        flexDirection: 'row',
        width: '100%',
    },
    middleLine: {
        width: '100%'
    },
    lastLine: {
        flexDirection: 'row',
        paddingLeft: 5,
        width: '100%'
    }
});