import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import Header from '../sections/Header';

const Contact = ({navigation}) => {
    const [state, setState] = useState({
        msg: 'Enter message',
        name: 'Enter name',
        email: 'Enter email',
    });

    const clearFields = () => {
        setState({name: '', msg: '', email: ''});
    };

    const sendMessage = () => {
        Alert.alert(state.name, state.msg);
        navigation.goBack();
    };


    return (
        <View style={styles.container}>
            <Header message='Press to login'/>
            <Text style={styles.heading}>Contact Us</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setState({...state,name: text})}
                value={state.name}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setState({...state,msg: text})}
                value={state.msg}
                multiline={true}
                numberOfLines={4}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setState({...state,email: text})}
                value={state.email}
            />
            <TouchableHighlight onPress={sendMessage} underlayColor='#31e981'>
                <Text style={styles.buttons}>
                    Send message
                </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={clearFields} underlayColor='#31e981'>
                <Text style={styles.buttons}>
                    Reset form
                </Text>
            </TouchableHighlight>
        </View>
    );
};

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs:{
        flex: 1,
        width: '80%',
        padding: 10
    },
    multiInput:{
        flex:2,
        width: '90%',
        paddingTop: 20
    },
    buttons:{
        marginTop:15,
        fontSize: 16
    }
});
