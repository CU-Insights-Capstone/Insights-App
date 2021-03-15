import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import globalStyles from '../../../styles/global'

interface Props {
    title: string
}

const PageTitle = ({title}: Props) => {
    let [isFontsLoaded] = useFonts({
        NeutraTextBold: require('../../assets/fonts/NeutraText-Bold.ttf'),
    });

    return (
        <View>
            <Text style={[styles.header, globalStyles.setColorWhite, {fontFamily: 'NeutraTextBold'}, globalStyles.textDropShadow]}>{title}</Text>
            <View style={globalStyles.horizontalAlign}>
                <View style={styles.rectangle} />
            </View>
        </View>
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

export default PageTitle;