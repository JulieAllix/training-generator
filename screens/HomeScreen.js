import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Colors from '../constants/themeColors';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
          <Text>Coucou</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default HomeScreen;