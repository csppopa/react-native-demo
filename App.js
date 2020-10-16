/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './app/views/Home';
import Contact from './app/views/Contact';
import Video from './app/views/Video';
import VideoDetail from './app/views/VideoDetail';
import Register from './app/views/Register';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="Home"
                    component={Home}/>
                <Stack.Screen
                    name="Contact"
                    component={Contact}/>
                <Stack.Screen
                    name="Videos"
                    component={Video}/>
                <Stack.Screen
                    name="VideoDetail"
                    component={VideoDetail}/>
                <Stack.Screen
                    name='Register'
                    component={Register}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
