import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, ImageBackground} from 'react-native';
import Carousel from '../../../components/Carousel';
import AppPage from '../../common/AppPage';
import { CarouselPage } from '../../../components/Carousel';

const pages: CarouselPage[] = [
    {
        description: 'High-maintenance children are emotionally reactive, which means they usually react strongly and negatively to stress or change. They often seem moody. They are low in task persistence and have difficulty finishing tasks. They also demonstrate high levels of movement and wiggle frequently.',
        simpleDescription: 'This is Gregory and Gretchen. They can be a bit grumpy sometimes but they both enjoy running around a lot and playing games with all of their friends! Say hello!',
        personalityType: 'High-Maintenance',
        images: [require('../../../assets/faceshots/Gregory.png'), require('../../../assets/faceshots/Gretchen.png')],
        names: ['Gregory', 'Gretchen'],
        characteristics: ['High in Negative Reactivity', 'Low in Task Persistence', 'High in Activity'],
        arrowDirection: ['Up', 'Down', 'Up'],
        backgroundColor: '#8B6BAF',
        link: 'https://insightsintervention.com/meet-the-kids/high-maintenance/'
    },
    {
        description: 'Industrious children demonstrate both high task persistence and low motor activity, which enables them to get things done. They take pleasure in their accomplishments. They are also low in negative reactivity, which means they are pleasant most of the time.',
        simpleDescription: 'This is Hilary and Henry. They are really nice and they both like working on fun activities. Say hello!',
        personalityType: 'Industrious',
        images: [require('../../../assets/faceshots/Hilary.png'), require('../../../assets/faceshots/Henry.png')],
        names: ['Hilary', 'Henry'],
        characteristics: ['Low in Negative Reactivity', 'High in Task Persistence', 'Low in Activity'],
        arrowDirection: ['Down', 'High', 'Low'],
        backgroundColor: '#FF8D00',
        link: 'https://insightsintervention.com/meet-the-kids/industrious/'
    },
    {
        description: 'Cautious children are often shy and slow to warm-up. They are low in approach, which means their first reaction is to withdraw from new or stressful situations. They also demonstrate high negative reactivity and will let you know when they are not pleased with a situation.',
        simpleDescription: 'This is Coretta and Carlos. They are a bit shy and quiet when you first meet them but they are really nice if you talk to them! Say hello!',
        personalityType: 'Shy & Cautious',
        images: [require('../../../assets/faceshots/Coretta.png'), require('../../../assets/faceshots/Carlos.png')],
        names: ['Coretta', 'Carlos'],
        characteristics: ['High in Negative Reactivity', 'High in Withdrawal'],
        arrowDirection: ['Up', 'Up'],
        backgroundColor: '#AD056C',
        link: 'https://insightsintervention.com/meet-the-kids/shy-and-cautious/'
    },
    {
        description: 'Social children are eager to meet new people. They are high in approach, often driven by a need to be with people and to try new experiences. Their temperaments are low in negative reactivity and withdrawal, which means they are usually pleasant most of the time.',
        simpleDescription: 'This is Fredrico and Felicity. They are both really nice and friendly! They like to make new friends and try new activities. Say hello!',
        personalityType: 'Social & Eager to Try',
        images: [require('../../../assets/faceshots/Fredrico.png'), require('../../../assets/faceshots/Felicity.png')],
        names: ['Fredrico', 'Felicity'],
        characteristics: ['Low in Withdrawal'],
        arrowDirection: ['Down'],
        backgroundColor: '#00B788',
        link: 'https://insightsintervention.com/meet-the-kids/social-and-eager-to-try/'
    },
];

const MeetTheKids = ({ route }: any) => {
    const { simple } = route.params;
    const contents = simple == 'true' 
        ? <Carousel pages={pages} isSimple={true}/>
        : <Carousel pages={pages} isSimple={false}/>;

    return <AppPage display={contents} title='Meet the Kids' />
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
});

export default MeetTheKids;