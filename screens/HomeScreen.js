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
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

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

    const [imageWidth, setImageWidth] = useState(availableDeviceWidth * 0.8);
    const [imageHeight, setImageHeight] = useState(availableDeviceHeight * 0.5);

    useEffect(() => {
        const updateImageSize = () => {
            setImageWidth(availableDeviceWidth * 0.8);
            setImageHeight(availableDeviceHeight * 0.5);
        };
    
        Dimensions.addEventListener('change', updateImageSize);
        
        return () => {
            Dimensions.removeEventListener('change', updateImageSize);
        };
    });

    if (availableDeviceWidth > 500) {
        return (
            <View style={styles.bigScreen}>
                <View style={styles.bigScreenContentWrapper}>
                    <View style={{...styles.imageWrapper, height: availableDeviceHeight*0.9}}>
                        <Image 
                            style={{height: '70%', width: '70%'}}
                            source={require('../assets/fitness-app.png')}
                            resizeMode="cover"
                            alt="A lady holding weights with a mobile phone in the background"
                        />
                    </View>
                    <View  style={styles.textWrapper}>
                        <Text style={DefaultStyles.appTitle}>Training generator</Text>
                        <Text style={DefaultStyles.pageSubtitle}>Generate your daily training based on your equipment and the muscles you want to train !</Text>
                        <MainButton onPress={() => props.onStartApp(true)}>Get started</MainButton>
                    </View>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.screen}>
                <Image 
                    style={{...styles.image, width: imageWidth, height: imageHeight}} 
                    source={require('../assets/fitness-app.png')}
                    resizeMode="cover"
                    alt="A lady holding weights with a mobile phone in the background"
                />
                <Text style={DefaultStyles.appTitle}>Training generator</Text>
                <Text style={DefaultStyles.pageSubtitle}>Generate your daily training based on your equipment and the muscles you want to train !</Text>
                <MainButton onPress={() => props.onStartApp(true)}>Get started</MainButton>
            </View>
        );
    } 
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    bigScreen: {
        padding: 20,
    },
    bigScreenContentWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrapper: {
        flex: 1.2,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        marginTop: 30,
    },
    appName: {
        textTransform: 'uppercase',
    }
});

export default HomeScreen;