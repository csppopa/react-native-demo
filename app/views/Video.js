import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {FlatList, Image, Text, TouchableWithoutFeedback, View} from 'react-native';

const Video = ({navigation}) => {
    const [state, setState] = useState({listLoaded: false});

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyBpP1wWAPo-uyLlxCV9L4flQ7y8GTi9jpw')
            .then(response => {
                setState({
                    listLoaded: true,
                    videoList: Array.from(response.data.items),
                });
            })
            .catch(error => console.log(error));
    }, []);

    const _renderItem = ({item}) => (
        <TubeItem
            id={item.id.videoId}
            title={item.snippet.title}
            imageSrc={item.snippet.thumbnails.high.url}
            navigation={navigation}
        />
    );

    const _keyExtractor = (item) => {
        return item.id.videoId;
    };

    return (
        <View>
            {state.listLoaded && (
                <View style={{paddingTop: 30}}>
                    <FlatList
                        data={state.videoList}
                        renderItem={_renderItem}
                        keyExtractor={_keyExtractor}
                    />
                </View>
            )}
            {!state.listLoaded && (
                <View style={{paddingTop: 30}}>
                    <Text> LOADING </Text>
                </View>
            )}
        </View>
    );
};

export default Video;

const TubeItem = (props) => {
    const onPressHandle = () => {
        props.navigation.navigate('VideoDetail', {youtubeId: props.id});
    };

    return (
        <TouchableWithoutFeedback onPress={onPressHandle}>
            <View style={{paddingTop: 20, alignItems: 'center'}}>
                <Image
                    style={{width: '100%', height: 200}}
                    source={{uri: props.imageSrc}}/>
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};
