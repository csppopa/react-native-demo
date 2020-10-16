import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage} from 'react-native';

const Register = ({navigation}) => {
    const [stage, setState] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
    });

    const cancelRegister = () => {
        Alert.alert('Registration cancelled');
        navigation.navigate('Home');
    };

    const registerAccount = () => {
        if (!stage.username) {
            Alert.alert('Please enter a username');
        } else if (state.password !== state.passwordConfirm) {
            Alert.alert('Passwords do not match');
        } else {
            AsyncStorage.getItem(state.username, (err, result) => {
                if (result !== null) {
                    Alert.alert(`${stage.username} aleardy exists`);
                } else {
                    AsyncStorage.setItem(state.username, state.password, (err, result) => {
                        Alert.alert(`${state.username} account created`);
                        navigation.navigate('Home');
                    });
                }
            });
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Register account</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setState({...state, username:text})}
                value={state.username}
            />
        </View>
    );

};

export default Register;
