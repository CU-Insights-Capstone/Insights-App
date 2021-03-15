import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Linking, StyleSheet, View } from 'react-native';

import InsightsButton from '../../../components/InsightsButton';
import AppPage from '../../common/AppPage';


const ForParents = (): JSX.Element => {
  const navigation = useNavigation();
  const pageContent = (
    <>
      {
        BUTTONS.map((button, i) => (
        <InsightsButton
            color={button.color}
            key={i} title={button.title}
            onClick={() => navigation.navigate(button.pathName)} />))
      }
      <InsightsButton
        color={'#28CBD3'}
        title={'Temperament Profile Survey'}
        // TODO: change this to the link that is actually is, not google.
        onClick={() => Linking.openURL('https://www.google.com')} />
    </>
  );
  return <AppPage display={pageContent} title='Parents'/>
}

const BUTTONS = [
  {
    pathName: 'Meet the Kids',
    title: 'Meet the Kids',
    color: '#28CBD3'
  },
  {
    pathName: 'INSIGHTS Blog',
    title: 'Insights on Insights Blog',
    color: '#28CBD3'
  },
  {
    pathName: 'INSIGHTS Podcast',
    title: 'INSIGHTS Podcast',
    color: '#28CBD3'
  },
]

const styles = StyleSheet.create({
})

export default ForParents;