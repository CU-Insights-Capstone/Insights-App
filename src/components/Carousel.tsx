import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import globalStyles from '../../styles/global'

interface Props {
    description: string[],
    personalityType: string[],
    images: string[],
    names: string[],
    characteristics: string[],
    arrowDirection: string[],
    isSimple: boolean,
}

const Carousel = ({personalityType, description, images, names, characteristics, arrowDirection, isSimple}: Props) => {
    let [isFontsLoaded] = useFonts({
        NeutraTextBold: require('../assets/fonts/NeutraText-Bold.ttf'),
        DescriptionText: require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    if (isFontsLoaded) {
        return (
            <>
                <SafeAreaView>
                    <Text style={{fontFamily: 'NeutraTextBold'}}>Custom Font</Text>
                    <Text style={{fontFamily: 'DescriptionText'}}>Open Sans Regular</Text>
                </SafeAreaView></>
        );
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
})

export default Carousel;