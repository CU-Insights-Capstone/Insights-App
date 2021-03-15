import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import BlogPost from '../../../components/BlogPost';
import AppPage from '../../common/AppPage';

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
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    );
    return <AppPage display={pageContent} title='Blog' />;
  } else if (isError) {
    const pageContent = (
      <View>
        <Text>
          Failed to fetch blog content. Please try again later.
        </Text>
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