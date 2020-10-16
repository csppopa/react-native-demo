import React from 'react';
import {WebView} from 'react-native-webview';

const VideoDetail = ({route}) => {
    let youtubeId = route.params.youtubeId;
    let youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`

    return (
        <WebView
            style={{marginTop: 20}}
            javaScriptEnabled={true}
            source={{uri: youtubeUrl}}
        />
    );
};

export default VideoDetail;
