import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';

import InsightsButton from '../../../components/InsightsButton';
import AppPage from '../../common/AppPage';

const ForTeachers = (): JSX.Element => {
  const navigation = useNavigation();

  const pageContent = (
    <View style={styles.container}>
      {BUTTONS.map((button, i) => (
        <InsightsButton
          color={button.color}
          key={i} title={button.title}
          onClick={() => navigation.navigate(button.pathName)} />))}
      <InsightsButton
        color={'#AD056C'}
        title={'Temperament Profile Survey'}
        onClick={() => Linking.openURL('https://nyu.qualtrics.com/jfe/form/SV_0OeWZmXu6YYTEbz')} />
    </View>
  );

  return <AppPage display={pageContent} title='Teachers' />;
}

const BUTTONS = [
  {
    pathName: 'Meet the Kids',
    title: 'Meet the Kids',
    color: '#AD056C'
  },
  {
    pathName: 'INSIGHTS Blog',
    title: 'Insights on Insights Blog',
    color: '#AD056C'
  },
  {
    pathName: 'INSIGHTS Podcast',
    title: 'INSIGHTS Podcast',
    color: '#AD056C'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ForTeachers;