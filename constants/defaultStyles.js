import { StyleSheet } from 'react-native';
import Colors from '../constants/themeColors';

export default StyleSheet.create({
    appTitle: {
        fontFamily: 'poppins',
        color: Colors.accent,
        fontSize: 30,
    },
    pageTitle: {
        fontFamily: 'abril',
        color: Colors.accent,
        fontSize: 24,
    },
    pageSubtitle: {
        fontFamily: 'montserrat',
        color: Colors.accent,
        fontSize: 14,
    },
    buttonText: {
        fontFamily: 'poppins',
        color: 'white',
        fontSize: 14,
    },
    optionText: {
        fontFamily: 'poppins',
        color: Colors.primary,
        fontSize: 14,
    }
});