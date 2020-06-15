import { StyleSheet } from 'react-native';
import Colors from '../constants/themeColors';

import { Dimensions } from 'react-native';

export default StyleSheet.create({
    appTitle: {
        fontFamily: 'poppins-med',
        color: Colors.accent,
        fontSize: Dimensions.get('window').width > 350 ? 30 : 22,
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
        fontSize: Dimensions.get('window').width > 350 ? 16 : 14,
        textAlign: 'center',
        marginVertical: Dimensions.get('window').width > 350 ? 15 : 10,
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