import { StyleSheet } from 'react-native';
import Colors from '../constants/themeColors';

export default StyleSheet.create({
    appTitle: {
        fontFamily: 'poppins-med',
        color: Colors.accent,
        fontSize: 34,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 20,
    },
    pageTitle: {
        fontFamily: 'abril',
        color: Colors.accent,
        fontSize: 28,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 25,
    },
    pageSubtitle: {
        fontFamily: 'montserrat',
        color: Colors.accent,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 15,
    },
    buttonText: {
        fontFamily: 'poppins',
        color: 'white',
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    optionText: {
        fontFamily: 'poppins',
        color: Colors.primary,
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});