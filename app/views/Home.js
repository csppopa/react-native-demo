import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header message='Press to login'/>
            <Hero/>
            <Menu navigationCustomProp={navigation}/>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
