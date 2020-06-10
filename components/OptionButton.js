import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/defaultStyles';

const OptionButton = props => {
    return (
        <TouchableOpacity style={styles.option}>
            <Image 
                style={styles.image} 
                source={props.src}
                resizeMode="stretch"
                alt={props.alt}
            />
            <Text style={DefaultStyles.optionText}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    option: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: Colors.accent,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: { 
        height: '65%',
        marginVertical: 13,
    },
    
});

export default OptionButton;