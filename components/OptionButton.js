import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    Dimensions
} from 'react-native';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/defaultStyles';

const OptionButton = props => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    const [buttonWidth, setButtonWidth] = useState(availableDeviceWidth * 0.4);
    const [buttonHeight, setButtonHeight] = useState(availableDeviceWidth * 0.4);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    useEffect(() => {
        const updateButton = () => {
            setButtonWidth(availableDeviceWidth * 0.4);
            setButtonHeight(availableDeviceWidth * 0.4);
        };
    
        Dimensions.addEventListener('change', updateButton);
        
        return () => {
            Dimensions.removeEventListener('change', updateButton);
        };
    });

    return (
        <TouchableOpacity style={{...styles.option, height: buttonHeight, width: buttonWidth }}>
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
        //width: Dimensions.get('window').width > 350 ? 150 : 140,
        //height: Dimensions.get('window').width > 350 ? 150 : 140,
        borderWidth: 1,
        borderColor: Colors.accent,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: { 
        height: '60%',
        marginVertical: 13,
    },
    
});

export default OptionButton;