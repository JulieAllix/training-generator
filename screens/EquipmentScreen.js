import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/defaultStyles';

import MainButton from '../components/MainButton';

const EquipmentScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.pageTitle}>Equipment</Text>
            <Text style={DefaultStyles.pageSubtitle}>Generate your daily training based on your equipment and the muscles you want to train !</Text>
            <MainButton>Validate</MainButton>
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
});

export default EquipmentScreen;