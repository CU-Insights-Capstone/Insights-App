import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text } from 'react-native';
import globalStyles from '../../../styles/global';
import { TextProp } from "./TextProp";

const TextPageHeader = ({children, color, style}: TextProp): JSX.Element => {
    let [isFontsLoaded] = useFonts({
        NeutraTextBold: require('../../assets/fonts/NeutraText-Bold.ttf'),
    });

    return isFontsLoaded ? (
        <Text style={[styles.header, globalStyles.setColorWhite, {fontFamily: 'NeutraTextBold'}, globalStyles.textDropShadow, {color}, style]}>
            {children}
        </Text>
    ) : <></>;
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 45,
        paddingTop: 20
    }
});

export default TextPageHeader;