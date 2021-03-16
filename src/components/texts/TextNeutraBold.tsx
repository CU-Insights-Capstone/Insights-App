import React from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { TextProp } from "./TextProp";


const TextNeutraBold = ({children, color, style}: TextProp): JSX.Element => {
    let [isFontsLoaded] = useFonts({
        NeutraTextBold: require('../../assets/fonts/NeutraText-Bold.ttf'),
    });

    return isFontsLoaded ? (
        <Text style={[{fontFamily: 'NeutraTextBold'}, {color}, style]}>
            {children}
        </Text>
    ) : <></>;
}

export default TextNeutraBold;