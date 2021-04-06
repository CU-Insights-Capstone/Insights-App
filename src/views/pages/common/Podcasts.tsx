import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import Parser from 'rss-parser';
import TextNeutraBold from '../../../components/texts/TextNeutraBold'
import globalStyles from '../../../../styles/global';
import PodcastPost from '../../../components/PodcastPost';
import AppPage from '../../common/AppPage';

const podcast_rss = require('../../../assets/podcast_rss/rss.txt');
const queryClient = new QueryClient();

const PodcastPage = (props: any) => (
  <QueryClientProvider client={queryClient}>
      <PodcastPageInner />
  </QueryClientProvider>
);

const hardCodedData = [{
  date: "December 15, 2020",
  title: "S1;E5: INSIGHTS Behind the Research",
  description: "In this episode, Dr. Sandee McClowry speaks to Dr. Erin O'Connor and Dr. Megan McCormick about the beginnings of INSIGHTS and the research that made it all happen.",
  url: "https://anchor.fm/s/3fe46774/podcast/play/24018811/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-11-15%2Fb1127c2c-d9b6-26a0-8801-1a4cbe8e4003.mp3"
},
{
  date: "December 8, 2020",
  title: "S1;E4: Teaching INSIGHTS: Nebraska PT II",
  description: "Listen here to our interview with Dr. Joan Carraher, a continuation of our INSIGHTS program for teachers in Nebraska.",
  url: "https://anchor.fm/s/3fe46774/podcast/play/23698347/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-11-8%2F136079399-44100-2-15d59fc4af68.m4a"
},
{
  date: "December 1, 2020",
  title: "S1E3: Teaching INSIGHTS: Nebraska",
  description: "Welcome to the thrid episode of INISGHTS where you will hear from Dr. McClowry (of course) and Angie talk about INSIGHTS teaching in Nebraska with a SPECIAL GUEST at the end, Rene, speaking with Bussiness Manager, Heather, about Hanukkah and Jewish Traditions!",
  url: "https://anchor.fm/s/3fe46774/podcast/play/23362196/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-11-1%2F36366cc6-07e1-be4a-25ea-0e9fafd79cf9.mp3"
},
{
  date: "November 24, 2020",
  title: "S1E2: INSIGHTS into the Holidays",
  description: "In this episode hear Dr. McClowry, creator of INSIGHTS discusses COVID-19 measures for children during the holidays with Business Manager Heather Nunes and Graphic Designer and Social Media Manager, Amour Castillo. SPECIAL GUEST: Jessie speaks with Amour about Christmas and Thanksgiving 🍁",
  url: "https://anchor.fm/s/3fe46774/podcast/play/23072553/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-10-24%2F8fbc740d-36b6-74d1-2634-45e9d3826e04.mp3"
},
{
  date: "November 13, 2020",
  title: "S1E1: Introducing INSIGHTS the Podcast",
  description: "INSIGHTS the Podcast is brought to you by Dr. Sandee McClowry, Ph.D., RN, FAAN, and Professor Emerita at New York University.  Dr. McClowry is the developer of INSIGHTS into Children's Temperament, a social-emotional learning program for children, teachers, and parents. INSIGHTS the Podcast will feature valuable conversations with mental health professionals, teachers, researchers, and parents.",
  url: "https://anchor.fm/s/3fe46774/podcast/play/22497495/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-10-12%2F53ff7266-aceb-9fdf-d644-f3e7310ae9ef.mp3"
},
]

const PodcastPageInner = () => {
  // const [data, setData] = useState([{}])
  const {isLoading, isError, data, error} = useQuery('podcast', async () => {
    const parser = new Parser;
    const feed = await parser.parseURL(podcast_rss);
    console.log(feed);
    // could get data from rss properly so it is hard coded for now
    // feed.items.forEach(item => {setData([...data, {title:item.title, description:item.contentSnippet}])})
  }, {
    refetchOnWindowFocus: false,
  });

  if(isError) {
    const pageContent = (
      <View style={globalStyles.container}>
        <TextNeutraBold color={'red'} style={styles.text}>
          Error
        </TextNeutraBold>
        <TextNeutraBold color={'white'} style={styles.text}>
          Failed to get podcasts. Please try again later.
        </TextNeutraBold>
      </View>
    );
    return <AppPage display={pageContent} title='Podcast' />;
  }else if (isLoading) {
    const pageContent = (
      <View style={globalStyles.container}>
        <TextNeutraBold color={'white'} style={styles.text}>
          Loading...
        </TextNeutraBold>
        <ActivityIndicator size='large' color='#ffffff'></ActivityIndicator>
      </View>
    );
    return <AppPage display={pageContent} title='Podcast' />;
  }

  const pageContent = (
    <View>
      <Text>
        { hardCodedData.map((post, i) => <PodcastPost key={i} podPost={post}/>) }
      </Text>
    </View>
  )
  return <AppPage display={pageContent} title='INSIGHTS ON INSIGHTS' />;
}

export default PodcastPage;

export interface PodcastData {
  date: string;
  title: string;
  description: string;
  url: string;
}

const styles = StyleSheet.create({
  text: {
      fontSize: 20,
      paddingBottom: 5,
  },
});
