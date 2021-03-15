import React from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

const TextDescription = (props: any): JSX.Element => {
    let [isFontsLoaded] = useFonts({
        DescriptionText: require('../../assets/fonts/OpenSans-Regular.ttf')
    });

    return isFontsLoaded ? (
        <Text style={{fontFamily: 'DescriptionText'}}>
            {props.children}
        </Text>
    ) : <></>;
}

export default TextDescription;