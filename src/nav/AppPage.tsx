import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


export enum AppPageTypes {
    MainMenu = "mm",
    ParentsHomepage = "ph",
    TeachersHomepage = "th",
    KidsHomepage = "kd",
}

export interface AppPageDetails {
    type: AppPageTypes, // page type for current page
    pageTitle: string; // string to be displayed at top of this page
    content: JSX.Element; // content to be displayed on this page
    backButtonDest: AppPageTypes; // what page to go to when back button is pressed
}

export interface AppPageOptions {
    includeTitleAndBackButton: boolean;
}

interface AppPageProps {
    setPage: (type: AppPageTypes) => void;
    details: AppPageDetails,
    options?: AppPageOptions,
}

const AppPage = (props: AppPageProps) => {
    const pageHeader: JSX.Element = props.options && !props.options.includeTitleAndBackButton
        ? <></>
        : <>
            <View style={styles.navBar}>
                <View style={styles.backButton}>
                    <Button title='Back' onPress={() => props.setPage(props.details.backButtonDest)}/>
                </View>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>{ props.details.pageTitle }</Text>
                <View style={styles.rightSpace}></View>
            </View>
            <View
                style={{
                    alignSelf: 'center',
                    borderBottomColor: 'white',
                    borderBottomWidth: 4,
                    width:'95%'
                }}
            />
        </>; 
    return (
        <>
            { pageHeader }
            { props.details.content }
        </>
    )
};

export default AppPage;

const styles = StyleSheet.create({
    navBar: {
        marginTop: 30,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginLeft: 15
    },
    rightSpace: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
});