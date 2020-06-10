import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Colors from '../constants/themeColors';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <Image 
                style={styles.image} 
                source={require('../assets/fitness-app.png')}
                resizeMode="cover"
            />
          <Text>Coucou</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '80%',
        height: 400,
        borderWidth: 2,
    },
});

export default HomeScreen;