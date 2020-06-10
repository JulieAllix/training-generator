import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/defaultStyles';

import MainButton from '../components/MainButton';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <Image 
                style={styles.image} 
                source={require('../assets/fitness-app.png')}
                resizeMode="cover"
                alt="A lady holding weights with a mobile phone in the background"
            />
            <Text style={DefaultStyles.appTitle}>Training generator</Text>
            <Text style={DefaultStyles.pageSubtitle}>Generate your daily training based on your equipment and the muscles you want to train !</Text>
            <MainButton>Get started</MainButton>
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
        width: '80%',
        height: 380,
        marginTop: 30,
    },
    appName: {
        textTransform: 'uppercase',
    }
});

export default HomeScreen;