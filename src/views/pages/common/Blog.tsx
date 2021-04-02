import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import BlogPost from '../../../components/BlogPost';
import AppPage from '../../common/AppPage';
import TextNeutraBold from '../../../components/texts/TextNeutraBold'
import globalStyles from '../../../../styles/global';
import TextPageHeader from '../../../components/texts/TextPageHeader';

const queryClient = new QueryClient();

const Blog = (props: any) => (
    <QueryClientProvider client={queryClient}>
        <BlogInner />
    </QueryClientProvider>
);

const BlogInner = () => {
  const {isLoading, isError, data, error} = useQuery('blog', async () => {
    const res = await fetch('https://insightsintervention.com/wp-json/wp/v2/posts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return res.json();
  }, {
    refetchOnWindowFocus: false,
  });

  if(isLoading) {
    const pageContent = (
      <View style={globalStyles.container}>
        <TextNeutraBold color={'white'} style={styles.text}>
          Loading...
        </TextNeutraBold>
        <ActivityIndicator size='large' color='#ffffff'></ActivityIndicator>
      </View>
    );
    return <AppPage display={pageContent} title='Blog' />;
  } else if (isError) {
    const pageContent = (
      <View style={globalStyles.container}>
        <TextNeutraBold color={'red'} style={styles.text}>
          Error
        </TextNeutraBold>
        <TextNeutraBold color={'white'} style={styles.text}>
          Failed to get blog posts. Please try again later.
        </TextNeutraBold>
      </View>
    );
    return <AppPage display={pageContent} title='Blog' />;
  }
  
  const blogPosts = data as BlogPostResponse[];

  const pageContent = (
    <View>
      <Text>
        { blogPosts.map((post, i) => <BlogPost key={i} blogPost={post}/>) }
      </Text>
    </View>
  );
  return <AppPage display={pageContent} title='Blog' />;
}

export interface BlogPostResponse {
  date: string;
  link: string;
  type: string;
  title: BlogPostContent;
  content: BlogPostContent;
}

interface BlogPostContent {
  rendered: string;
}

export default Blog;

const styles = StyleSheet.create({
  text: {
      fontSize: 20,
      paddingBottom: 5,
  },
});