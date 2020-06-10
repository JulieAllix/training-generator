import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Colors from './constants/themeColors';

import HomeScreen from './screens/HomeScreen';
import EquipmentScreen from './screens/EquipmentScreen';

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
  const [startStatus, setStartStatus] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)} 
        onError={() => console.log(err)}
      />
    );
  }

  const startAppHandler = (bool) => {
    setStartStatus(bool);
  };

  let content = <HomeScreen onStartApp={startAppHandler}/>;

  if (startStatus === true) {
    content = <EquipmentScreen onClick={startAppHandler}/>;
  };

  return (
    <View style={styles.screen}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
