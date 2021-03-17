import React, { useState } from 'react';
import {Linking, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import TextNeutraBold from './texts/TextNeutraBold';
import TextDescription from './texts/TextDescription';
import AppImage from "./AppImage";
import globalStyles from "../../styles/global";

export interface CarouselPage {
    description: string,
    personalityType: string,
    images: [string, string],
    names: [string, string],
    characteristics: string[],
    arrowDirection: string[],
    backgroundColor: string,
    link: string
}

interface CarouselProps {
    pages: CarouselPage[],
    isSimple: boolean,
}

const leftArrow = require('../assets/keyboard_arrow_left-24px.svg');
const rightArrow = require('../assets/keyboard_arrow_right-24px.svg');
const upArrow = require('../assets/arrow-up-circle.svg');
const downArrow = require('../assets/arrow-down-circle.svg');

const Carousel = ({pages, isSimple}: CarouselProps) => {
    const [pageNumber, setPageNumber] = useState(0);

    const rightClickHandler = () => {
        if (pageNumber != 3) setPageNumber(pageNumber + 1);
    }

    const leftClickHandler = () => {
        if (pageNumber != 0) setPageNumber(pageNumber - 1);
    }

    const image1 = pages[pageNumber].images[0];
    const image2 = pages[pageNumber].images[1];

    return (
        <>
            <View style={[styles.card, {backgroundColor: pages[pageNumber].backgroundColor}, globalStyles.dropShadow]}>
                <TextNeutraBold color={'white'} style={[styles.personalityTypeTitle, globalStyles.alignCenter]}>
                    {pages[pageNumber].personalityType.toUpperCase()}
                </TextNeutraBold>

                <TextDescription style={[globalStyles.alignCenter, styles.description]}>
                    {pages[pageNumber].description}
                </TextDescription>

                <View style={globalStyles.horizontalAlign}>
                    <AppImage source={image1} style={[styles.image, {marginRight: 10}]}></AppImage>
                    <AppImage source={image2} style={[styles.image, {marginLeft: 10}]}></AppImage>
                </View>

                <View style={globalStyles.horizontalAlign}>
                    <TextNeutraBold color={'white'} style={[styles.name, globalStyles.alignCenter, {marginRight: 10}]}>
                        {pages[pageNumber].names[0].toUpperCase()}
                    </TextNeutraBold>
                    <TextNeutraBold color={'white'} style={[styles.name, globalStyles.alignCenter, {marginLeft: 10}]}>
                        {pages[pageNumber].names[1].toUpperCase()}
                    </TextNeutraBold>
                </View>

                {pages[pageNumber].characteristics.map((characteristic, index) =>
                    <>
                        <View style={styles.alignRow}>
                            <AppImage source={pages[pageNumber].arrowDirection[index] == 'Up' ? upArrow : downArrow} style={styles.characteristicArrow}/>
                            <TextNeutraBold color={'white'} style={[styles.characteristicsText]}>{characteristic}{'\n'}</TextNeutraBold>
                        </View>
                    </>
                )}
                <View style={styles.linkPosition}>
                    <TextNeutraBold style={[styles.link, styles.textDropShadow, globalStyles.alignCenter]}
                          onPress={() => Linking.openURL(pages[pageNumber].link)}>
                        Learn More!
                    </TextNeutraBold>
                </View>
            </View>
            <View style={globalStyles.horizontalAlign}>
                <AppImage source={leftArrow} style={styles.pageArrow} onClick={leftClickHandler}/>
                <AppImage source={rightArrow} style={styles.pageArrow} onClick={rightClickHandler}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    alignRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        width: '90%',
        height: '85%',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 5,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 2
    },
    characteristicArrow: {
        width: 40,
        height: 40,
        marginRight: 5,
        marginTop: 5,
        marginLeft: 10
    },
    characteristicsText: {
        fontSize: 21,
        marginTop: 8,
    },
    description: {
        fontSize: 16,
        marginTop: 15
    },
    image: {
        width: 125,
        height: 125,
        borderRadius: 125 / 2,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#fff'
    },
    link: {
        color: '#28CBD3',
        fontSize: 20,
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    linkPosition: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center'
    },
    name: {
        fontSize: 26,
        marginTop: 10,
    },
    pageArrow: {
        width: 75,
        height: 75
    },
    personalityTypeTitle: {
        fontSize: 26,
        marginTop: 5
    },
    textDropShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {
            width: 0,
            height: 3,
        },
        textShadowRadius: 4.65,
        elevation: 6,
    },
});

export default Carousel;