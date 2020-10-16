import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Hero = () => {
    return (
        <Image
            style={styles.heroImage}
            source={require('./img/WhatisHerov3.jpg')}>
        </Image>
    );
};

export default Hero;

const styles = StyleSheet.create({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 8
    }
});
