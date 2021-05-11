import React from 'react';
import AppPage from '../common/AppPage';
import { StyleSheet, View } from 'react-native';
import globalStyles from '../../../styles/global';
import TextNeutraBold from "../../components/texts/TextNeutraBold";
import TextDescription from '../../components/texts/TextDescription';

const HomescreenInstructionsPage = (): JSX.Element => {

    const pageContent = (
        <View style={globalStyles.container}>
            <View style={[styles.card, globalStyles.dropShadow]}>
                <TextNeutraBold style={{textAlign: 'center', fontSize: 35}}> How to </TextNeutraBold>
                <TextDescription style={{fontSize: 25, padding: '20px'}}>1. Click the share button (Safari) or more options (Chrome)</TextDescription>
                <TextDescription style={{fontSize: 25, padding: '10px'}}>2. Click Add to Home Screen</TextDescription>
                <TextDescription style={{fontSize: 25, padding: '10px'}}>3. Click Add</TextDescription>
            </View>
            {/* <View style={[styles.card, globalStyles.dropShadow]}>
                <h2 style={{textAlign: 'center'}}>Safari Instructions</h2>
                <ol>
                    <li>Click the share button.</li>
                    <li style={{marginTop: '10px'}}>Click the add to homescreen button.</li>
                    <li style={{marginTop: '10px'}}>Give it a name.</li>
                </ol>
            </View>
            <View style={[styles.card, globalStyles.dropShadow]}>
                <h2 style={{textAlign: 'center'}}>Google Chrome Instructions</h2>
                <ol>
                    <li>Press 3 dot button in top right of screen.</li>
                    <li style={{marginTop: '10px'}}>Click 'Add to Home screen' button.</li>
                    <li style={{marginTop: '10px'}}>Click 'Add'.</li>
                </ol>
            </View> */}
        </View>
    );

    return <AppPage display={pageContent} title='Add to Homescreen'/>
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: undefined,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 5,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 2,
        backgroundColor: '#fff',
        marginTop: '15px'
    },
    title: {
        color: '#28CBD3',
        fontSize: 26,
    },
    link: {
        color: '#28CBD3',
        fontSize: 20,
        marginTop: 5,
        textDecorationLine: 'underline',
        marginBottom: 5
    }
});

export default HomescreenInstructionsPage;
