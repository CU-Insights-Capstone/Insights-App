import React from 'react';
import { Button, StyleSheet, useWindowDimensions, View } from 'react-native';
import HTML from 'react-native-render-html';
import { BlogPostResponse } from '../views/pages/common/Blog';
import TextDescription from './texts/TextDescription';
import TextNeutraBold from './texts/TextNeutraBold';

interface BlogPostProps {
    blogPost: BlogPostResponse;
}

const BlogPost = (props: BlogPostProps) => {
    const contentWidth = useWindowDimensions().width;

    return (
    <>
        <TextNeutraBold>
            {props.blogPost.title.rendered} ({props.blogPost.date})
        </TextNeutraBold>
        <TextDescription>
            <HTML source={{ html: props.blogPost.content.rendered + '<hr />' }} contentWidth={contentWidth} />
            {/*props.blogPost.content.rendered*/}
        </TextDescription>
    </>);
}

export default BlogPost;