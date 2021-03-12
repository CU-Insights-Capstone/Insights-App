import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

import InsightsButton from '../components/InsightsButton';

const ForTeachers = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {BUTTONS.map((button, i) => (
        <InsightsButton
          color={button.color}
          key={i} title={button.title}
          onClick={() => navigation.navigate(button.pathName)} />))}
      <InsightsButton
        color={'#AD056C'}
        title={'Temperament Profile Survey'}
        // TODO: change this to the link that is actually is, not google.
        onClick={() => Linking.openURL('https://www.google.com')} />
    </View>
  );
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
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ForTeachers;