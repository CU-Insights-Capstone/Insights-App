import React from 'react';
import { Text, Button, View } from 'react-native';
import { GLOBAL_STYLES } from '../App';
import { AppPageTypes } from '../nav/AppPage';

interface MainMenuProps {
    setPage: (page: AppPageTypes) => void;
}

const MainMenu = (props: MainMenuProps): JSX.Element => {
    return (
        <View style={GLOBAL_STYLES.buttons}>
            <Button title='For Parents' onPress={() => props.setPage(AppPageTypes.ParentsHomepage)} />
            <Text>{'\n'}</Text>
            <Button title='For Teachers' onPress={() => props.setPage(AppPageTypes.TeachersHomepage)} />
            <Text>{"\n"}</Text>
            <Button title='For Kids' onPress={() => props.setPage(AppPageTypes.KidsHomepage)} />
        </View>
    );
}

export default MainMenu;