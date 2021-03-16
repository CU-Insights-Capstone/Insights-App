import React from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { TextProp } from "./TextProp";

const TextDescription = ({children, color, style}: TextProp): JSX.Element => {
    let [isFontsLoaded] = useFonts({
        DescriptionText: require('../../assets/fonts/OpenSans-Regular.ttf')
    });

    return isFontsLoaded ? (
        <Text style={[{fontFamily: 'DescriptionText'}, {color}, style]}>
            {children}
        </Text>
    ) : <></>;
}

export default TextDescription;