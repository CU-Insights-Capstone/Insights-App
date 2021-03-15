import React from 'react';
import { Text, View } from 'react-native';
import AppPage from '../../common/AppPage';
 

const Blog = () => {

  const pageContent = (
    <View>
      <Text>
        Blog Entries here.
      </Text>
    </View>
  );

  return <AppPage display={pageContent} title='Blog' />;
}

export default Blog;