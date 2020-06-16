import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/defaultStyles';

const MainButton = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={DefaultStyles.buttonText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: Dimensions.get('window').width > 350 ? 10 : 5,
        marginVertical: 15,
        borderRadius: 20,
        width: Dimensions.get('window').width > 350 ? 115 : 100,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 5,
    },
});

export default MainButton;