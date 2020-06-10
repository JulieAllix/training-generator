import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Colors from './constants/themeColors';

const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'abril': require('./assets/fonts/AbrilFatface-Regular.ttf'),
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-med': require('./assets/fonts/Poppins-Medium.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)} 
        onError={() => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'poppins-med',
    color: Colors.accent,
  }
});
