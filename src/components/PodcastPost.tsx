import React from 'react';
import { StyleSheet, useWindowDimensions, View} from 'react-native';
import globalStyles from '../../styles/global';
import TextDescription from './texts/TextDescription';
import TextNeutraBold from './texts/TextNeutraBold';
import { PodcastData } from '../views/pages/common/Podcast';


interface PodcastPostProps {
    podPost: PodcastData;
}

const PodcastPost = (props:PodcastPostProps) => {
    const contentWidth = useWindowDimensions().width;
  
    return (
    <>
        <View style={globalStyles.container} >
            <View style={[styles.card, globalStyles.dropShadow]} >
                <TextNeutraBold style={styles.title}>
                    {props.podPost.title}
                </TextNeutraBold>
                <TextNeutraBold color='gray'>
                    {props.podPost.date}
                </TextNeutraBold>
                <TextDescription >
                    {props.podPost.description}
                </TextDescription>
                <br/>
                <audio controls >
                  <source src={props.podPost.url} type="audio/mp3" />
                </audio >
            </View>
        </View>
    </>);
  }

export default PodcastPost;

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: undefined,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 2,
        backgroundColor: '#fff'
    },
    title: {
        color: '#28CBD3',
        fontSize: 26,
    }
});
