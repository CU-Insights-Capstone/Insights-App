import React from 'react';
import { Button } from 'react-native';


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
            <Button title='Back' onPress={() => props.setPage(props.details.backButtonDest)}/>
            <hr />
        </>; 
    return (
        <>
            { pageHeader }
            { props.details.content }
        </>
    )
};

export default AppPage;