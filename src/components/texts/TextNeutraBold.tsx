import React from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

const TextNeutraBold = (props: any): JSX.Element => {
    let [isFontsLoaded] = useFonts({
        NeutraTextBold: require('../../assets/fonts/NeutraText-Bold.ttf'),
    });

    return isFontsLoaded ? (
        <Text style={{fontFamily: 'NeutraTextBold'}}>
            {props.children}
        </Text>
    ) : <></>;
}

export default TextNeutraBold;