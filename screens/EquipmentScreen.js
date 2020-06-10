import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/defaultStyles';

import OptionButton from '../components/OptionButton';
import MainButton from '../components/MainButton';

const EquipmentScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.pageTitle}>Equipment</Text>
            <Text style={DefaultStyles.pageSubtitle}>Which equipment is at your disposal today ?</Text>
            <View style={styles.options}>
                <View style={styles.optionsRow}>
                    <OptionButton
                        src={require("../assets/machines.png")}
                        alt="A fitness machine"
                    >
                        Machines
                    </OptionButton>
                    <OptionButton
                        src={require("../assets/weights.png")}
                        alt="Free weights"
                    >
                        Free weights
                    </OptionButton>
                </View>
                <View style={styles.optionsRow}>
                    <OptionButton
                        src={require("../assets/elastibands.png")}
                        alt="Elastibands"
                    >
                        Elastibands
                    </OptionButton>
                    <OptionButton
                        src={require("../assets/body.png")}
                        alt="A woman in a yoga position"
                    >
                        My body
                    </OptionButton>
                </View>
            </View>
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
    options: {
        marginVertical: 50,
    },
    optionsRow: {
        flexDirection: 'row',
    }
});

export default EquipmentScreen;