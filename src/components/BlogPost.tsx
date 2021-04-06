import React from 'react';
import { Button, StyleSheet, useWindowDimensions, View, Linking } from 'react-native';
import HTML from 'react-native-render-html';
import globalStyles from '../../styles/global';
import { BlogPostResponse } from '../views/pages/common/Blog';
import AppImage from './AppImage';
import TextDescription from './texts/TextDescription';
import TextNeutraBold from './texts/TextNeutraBold';
import Moment from 'react-moment';

interface BlogPostProps {
    blogPost: BlogPostResponse;
}

const BlogPost = (props: BlogPostProps) => {
    const contentWidth = useWindowDimensions().width;
    const openBlogPost = () => Linking.openURL(props.blogPost.link);
    return (
    <>
        <View style={globalStyles.container}>
            <View style={[styles.card, globalStyles.dropShadow]}>
                <TextNeutraBold style={styles.title} onClick={openBlogPost}>
                    {props.blogPost.title.rendered}
                </TextNeutraBold>
                <TextNeutraBold color='gray'>
                    <Moment format='MMMM DD, YYYY'>{props.blogPost.date}</Moment>
                </TextNeutraBold>
                <img src={props.blogPost.jetpack_featured_media_url} width={'100%'}></img>
                <TextDescription>
                    <HTML source={{ html: props.blogPost.content.rendered + '<hr />' }} contentWidth={contentWidth} />
                    {/*props.blogPost.content.rendered*/}
                </TextDescription>
                <TextNeutraBold style={[styles.link, globalStyles.alignCenter]} onClick={openBlogPost}>
                    Read on the website!
                </TextNeutraBold>
            </View>
        </View>
    </>);
}

export default BlogPost;

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
        backgroundColor: '#fff'
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