import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, ImageBackground } from 'react-native';
import TextNeutraBold from './texts/TextNeutraBold';
import TextDescription from './texts/TextDescription';

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
    return (
        <>
            <SafeAreaView>
                <TextNeutraBold>Custom Font</TextNeutraBold>
                <TextDescription>Open Sans Regular</TextDescription>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
})

export default Carousel;