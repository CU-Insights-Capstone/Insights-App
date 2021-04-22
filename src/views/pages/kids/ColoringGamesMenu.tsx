import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import InsightsButton from '../../../components/InsightsButton';
import AppPage from '../../common/AppPage';

const ColoringGamesMenu = () => {
    const navigation = useNavigation();
    const pageContent = ( <View style={styles.buttonContainer}>
        {BUTTONS.map((button, i) => (
            <InsightsButton
                color={button.color}
                key={i} title={button.title}
                onClick={() => navigation.navigate(button.pathName)}
            />
        ))}
    </View>);
    return <AppPage display={pageContent} title='Coloring Games' />;
}
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        width: '100%'
    },
});

const BUTTONS = [
    {
        pathName: 'Fredrico',
        title: 'Fredrico',
        color: '#28CBD3'
    },
    {
        pathName: 'Gregory',
        title: 'Gregory',
        color: '#AD056C'
    },
    {
        pathName: 'Hilary',
        title: 'Hilary',
        color: '#FF8D00'
    },
];

export default ColoringGamesMenu;