import React from 'react';
import { Button, Image, Linking, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SocialIcon, Icon } from 'react-native-elements'
import { GLOBAL_STYLES } from '../App';
import { AppPageTypes } from '../nav/AppPage';

interface MainMenuProps {
    setPage: (page: AppPageTypes) => void;
}

const MainMenu = (props: MainMenuProps): JSX.Element => {
    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
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
                    </View>
                    <Text>{'\n'}</Text>
                    <View style={styles.buttons}>
                        <Button title='For Teachers' color='#AD056C' onPress={() => props.setPage(AppPageTypes.TeachersHomepage)} />
                    </View>
                    <Text>{'\n'}</Text>
                    <View style={styles.buttons}>
                        <Button title='For Kids' color='#FF8D00' onPress={() => props.setPage(AppPageTypes.KidsHomepage)} />
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View
                        style={{
                            borderBottomColor: '#43525A',
                            borderBottomWidth: 2.5,
                            width:'80%',
                            marginTop:'10%'
                        }}
                        /> 
                    <View>
                    <Text style={{color: 'black', fontSize: 20, textDecorationLine: 'underline'}}
                        onPress={() => Linking.openURL('http://insightsintervention.com')}>
                        Visit Our Website!
                        <Icon name='external-link' type='evilicon' size={20}/>
                    </Text>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
                    <SocialIcon onPress={() => Linking.openURL('https://www.facebook.com/insightsintervention/')} type='facebook' light/>
                    <SocialIcon onPress={() => Linking.openURL('https://twitter.com/sandeemcclowry')} type='twitter' light/>
                    <SocialIcon onPress={() => Linking.openURL('https://www.instagram.com/insightsintervention/')} type='instagram' light/>
                </View>
            </View>
        </ImageBackground>
    );
}

export default MainMenu;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    buttons: {
        width: '70%',
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 5,
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
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
  });