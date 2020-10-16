import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Header = (props) => {
    const [state, setState] = useState({isLoggedIn: false});

    const toggleUser = () => {
        setState(previousState => {
            return {isLoggedIn: !previousState.isLoggedIn};
        });
    };

    const display = () => {
        return state.isLoggedIn ? 'Sample user' : props.message;
    };

    return (
        <View style={styles.headStyle}>
            <Image
                style={styles.logoStyle}
                source={require('./img/PngItem_4750896.png')}>
            </Image>
            <Text style={styles.headText}
                  onPress={toggleUser}>
                {display()}
            </Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1,
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000',
    },
    logoStyle: {
        paddingLeft: 20,
        flex: 1,
        width: undefined,
        height: undefined,
    },
});
