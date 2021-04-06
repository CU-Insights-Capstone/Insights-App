import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const podcast_rss = require('../../../assets/podcast_rss/rss.txt');
const queryClient = new QueryClient();

const PodcastPage = (props: any) => (
  <QueryClientProvider client={queryClient}>
      <PodcastPageInner />
  </QueryClientProvider>
);

const PodcastPageInner = () => {
  const {isLoading, isError, data, error} = useQuery('podcast', async () => {
    const res = await fetch(podcast_rss);
    return res.text();
  }, {
    refetchOnWindowFocus: false,
  });

  if(isError) {
    return(
      <View>
        <Text>
          Error: { error }
        </Text>
      </View>
    )
  }else if (isLoading) {
    return(
      <View>
        <Text>
          Loading....
        </Text>
      </View>
    )
  }

  // PARSE RSS DATA HERE
  
  return(
    <View>
      <Text>
        { data }
      </Text>
    </View>
  )
}

export default PodcastPage;