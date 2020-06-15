import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions 
} from 'react-native';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/defaultStyles';

import MainButton from '../components/MainButton';

const HomeScreen = props => {
    const [imageWidth, setImageWidth] = useState(Dimensions.get('window').width * 0.8);

    useEffect(() => {
        const updateLayout = () => {
            setImageWidth(Dimensions.get('window').width * 0.8);
        };
    
        Dimensions.addEventListener('change', updateLayout);
        
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <View style={styles.screen}>
            <Image 
                style={{...styles.image, width: imageWidth}} 
                source={require('../assets/fitness-app.png')}
                resizeMode="cover"
                alt="A lady holding weights with a mobile phone in the background"
            />
            <Text style={DefaultStyles.appTitle}>Training generator</Text>
            <Text style={DefaultStyles.pageSubtitle}>Generate your daily training based on your equipment and the muscles you want to train !</Text>
            <MainButton onPress={() => props.onStartApp(true)}>Get started</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        //width: '80%',
        //height: 380,
        marginTop: 30,
    },
    appName: {
        textTransform: 'uppercase',
    }
});

export default HomeScreen;