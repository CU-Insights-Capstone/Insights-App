import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';

const KidsHomepage = (): JSX.Element => {
    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.backgroundImage}>
            <View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button title='Meet The Kids!' color='#28CBD3'/>
                    </View>
                    <Text>{'\n'}</Text>
                    <View style={styles.buttons}>
                        <Button title='Fun Games!' color='#28CBD3'/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default KidsHomepage;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    buttons: {
        width: '80%',
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 5,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
  });