import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, ImageBackground} from 'react-native';
import globalStyles from "../../styles/global";
import Carousel from "../components/Carousel";
import PageTitle from "../components/PageTitle";

const bg = require('../assets/background.png');

const description: string[] = [
    'High-maintenance children are emotionally reactive, which means they usually react strongly and negatively to stress or change. They often seem moody. They are low in task persistence and have difficulty finishing tasks. They also demonstrate high levels of movement and wiggle frequently.',
    'Industrious children demonstrate both high task persistence and low motor activity, which enables them to get things done. They take pleasure in their accomplishments. They are also low in negative reactivity, which means they are pleasant most of the time.',
    'Cautious children are often shy and slow to warm-up. They are low in approach, which means their first reaction is to withdraw from new or stressful situations. They also demonstrate high negative reactivity and will let you know when they are not pleased with a situation.',
    'Social children are eager to meet new people. They are high in approach, often driven by a need to be with people and to try new experiences. Their temperaments are low in negative reactivity and withdrawal, which means they are usually pleasant most of the time.'
]

const personalityType: string[] = [
    '',
    '',
    '',
    ''
]

const images: string[] = [
    '../assets/faceshots/Gregory.png',
    '../assets/faceshots/Gretchen.png',
    '../assets/faceshots/Hilary.png',
    '../assets/faceshots/Henry.png',
    '../assets/faceshots/Coretta.png',
    '../assets/faceshots/Carlos.png',
    '../assets/faceshots/Fredrico.png',
    '../assets/faceshots/Felicity.png',
]

const names: string[] = [
    'Gregory',
    'Gretchen',
    'Hilary',
    'Henry',
    'Coretta',
    'Carlos',
    'Fredrico',
    'Felicity',
]

const characteristics: string[] = [
    '',
    '',
]

const arrowDirection: string[] = [
    '',
    '',
]

const MeetTheKids = ({ route }) => {
    const { simple } = route.params;
    const contents = simple == 'true' ? 'Put Simplified Carosel here.' : <Carousel></Carousel>

    return (
        <ImageBackground source={bg} style={globalStyles.backgroundImage}>
            <PageTitle title={'Meet the Kids'}/>
            <View>{contents}</View>
            <View style={globalStyles.container}>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 45,
        paddingTop: 20
    },
    rectangle: {
        width: 300,
        height: 5,
        backgroundColor: 'white',
        borderRadius: 40
    },
})

export default MeetTheKids;