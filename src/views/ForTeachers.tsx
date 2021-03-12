import React from 'react';
import { StyleSheet, View } from 'react-native';

import InsightsButton from '../components/InsightsButton';

const ForTeachers = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {BUTTONS.map((button, i) => (
        <InsightsButton color={button.color} pathName={button.pathName} key={i} title={button.title} />
      ))}
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
  },
  {
    pathName: 'Temperament Profile Survey',
    title: 'Temperament Profile Survey',
    color: '#AD056C'
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ForTeachers;