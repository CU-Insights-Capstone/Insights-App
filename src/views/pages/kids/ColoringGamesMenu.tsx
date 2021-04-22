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
        color: '#00B788'
    },
    {
        pathName: 'Gregory',
        title: 'Gregory',
        color: '#7e5ea4'
    },
    {
        pathName: 'Hilary',
        title: 'Hilary',
        color: '#FF8D00'
    },
    {
        pathName: 'Coretta',
        title: 'Coretta',
        color: '#AD056C'
    },
];

export default ColoringGamesMenu;
