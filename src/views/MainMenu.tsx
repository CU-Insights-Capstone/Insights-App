import React from 'react';
import { Button, Image, Linking, StyleSheet, Text, View } from 'react-native';
import { GLOBAL_STYLES } from '../App';
import { AppPageTypes } from '../nav/AppPage';

interface MainMenuProps {
    setPage: (page: AppPageTypes) => void;
}

const MainMenu = (props: MainMenuProps): JSX.Element => {
    return (
        <View>
            <View style={styles.logoContainer}>
                <Image 
                    resizeMode='contain'
                    source={require('../assets/INSIGHTS_Main_Logo.png')}
                    style={styles.logo}  
                    />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttons}>
                    <Button title='For Parents' color='#28CBD3' onPress={() => props.setPage(AppPageTypes.ParentsHomepage)} />
                    <Text>{'\n'}</Text>
                    <Button title='For Teachers' color='#AD056C' onPress={() => props.setPage(AppPageTypes.TeachersHomepage)} />
                    <Text>{"\n"}</Text>
                    <Button title='For Kids' color='#FF8D00' onPress={() => props.setPage(AppPageTypes.KidsHomepage)} />
                </View>
            </View>
            <View style={{alignItems: 'center'}}>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 3,
                        width:'80%',
                        marginTop:'10%'
                    }}
                    /> 
                <View>
                <Text style={{color: 'black', fontSize: 25, textDecorationLine: 'underline'}}
                    onPress={() => Linking.openURL('http://insightsintervention.com')}>
                    Visit Our Website!
                </Text>
                </View>
            </View>

        </View>
    );
}

export default MainMenu;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    buttons: {
        width: '70%',
    },
    logo: {
        flex: 1,
        resizeMode: 'contain',
    },
    logoContainer: {
        alignItems: 'center',
        height:'50%',
        paddingTop:'20%',
        marginBottom:'10%'
    },
  });
  