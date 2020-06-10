import { StyleSheet } from 'react-native';
import Colors from '../constants/themeColors';

export default StyleSheet.create({
    appTitle: {
        fontFamily: 'poppins-med',
        color: Colors.accent,
        fontSize: 30,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    pageTitle: {
        fontFamily: 'abril',
        color: Colors.accent,
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    pageSubtitle: {
        fontFamily: 'montserrat',
        color: Colors.accent,
        fontSize: 14,
        textAlign: 'center',
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
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});