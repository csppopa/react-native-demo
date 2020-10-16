import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Menu = ({navigationCustomProp}) => {
    const onPressHandle = () => {
        Alert.alert('You tapped the button');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={() => navigationCustomProp.navigate('Videos')}>
                    <Text style={styles.buttonText}>LESSONS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={() => navigationCustomProp.navigate('Register')}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={onPressHandle}>
                    <Text style={styles.buttonText}>BLOG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={() => navigationCustomProp.navigate('Contact')}>
                    <Text style={styles.buttonText}>CONTACT</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={onPressHandle}>
                    <Text style={styles.buttonText}>QUIZ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyles}
                    onPress={onPressHandle}>
                    <Text style={styles.buttonText}>ABOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35605a',
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
});
