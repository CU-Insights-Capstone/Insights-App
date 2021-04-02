import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, ImageBackground, Linking, StyleSheet, Text, View} from 'react-native';
import {SocialIcon, Icon} from 'react-native-elements'
import AppImage from '../../components/AppImage';

import InsightsButton from '../../components/InsightsButton';
import AppPage from '../common/AppPage';
import globalStyles from "../../../styles/global";
import TextNeutraBold from "../../components/texts/TextNeutraBold";

const insights_logo = require('../../assets/INSIGHTS_Main_Logo.png');

const Home = () => {
    const navigation = useNavigation();

    const pageContent = (
        <View>
            <View style={styles.logoContainer}>
                <AppImage source={insights_logo}/>
            </View>
            <View style={styles.buttonContainer}>
                {BUTTONS.map((button, i) => (
                    <InsightsButton
                        color={button.color}
                        key={i} title={button.title}
                        onClick={() => navigation.navigate(button.pathName)}
                    />
                ))}
            </View>
            <View style={{alignItems: 'center'}}>
                <View
                    style={{
                        borderBottomColor: '#43525A',
                        borderBottomWidth: 2.5,
                        width: '80%',
                        marginTop: '10%'
                    }}
                />
                <View style={[styles.alignRow, {paddingTop: 10}]}>
                    <TextNeutraBold style={[{
                        textDecorationLine: 'underline',
                        fontSize: 20
                    }, globalStyles.alignCenter, globalStyles.textDropShadow]}
                                    onClick={() => Linking.openURL('http://insightsintervention.com')}>
                        Visit Our Website!
                    </TextNeutraBold>
                    <Icon name='external-link' type='evilicon' size={20}/>
                </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
                <SocialIcon onPress={() => Linking.openURL('https://www.facebook.com/insightsintervention/')}
                            type='facebook' light/>
                <SocialIcon onPress={() => Linking.openURL('https://twitter.com/sandeemcclowry')} type='twitter' light/>
                <SocialIcon onPress={() => Linking.openURL('https://www.instagram.com/insightsintervention/')}
                            type='instagram' light/>
            </View>
        </View>
    );

    return <AppPage display={pageContent}/>;
}

const BUTTONS = [
    {
        pathName: 'For Parents',
        title: 'For Parents',
        color: '#28CBD3'
    },
    {
        pathName: 'For Teachers',
        title: 'For Teachers',
        color: '#AD056C'
    },
    {
        pathName: 'For Kids',
        title: 'For Kids',
        color: '#FF8D00'
    },
];

const styles = StyleSheet.create({
    alignRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        height: '50%',
        paddingTop: '20%',
        marginBottom: '10%'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

export default Home;