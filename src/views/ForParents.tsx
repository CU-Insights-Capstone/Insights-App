import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import InsightsButton from '../components/InsightsButton';

const ForParents = (): JSX.Element => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {BUTTONS.map((button, i) => (
        <InsightsButton color={button.color} pathName={button.pathName} key={i} title={button.title}/>
      ))}
    </View>
  );
}

const BUTTONS = [
  {
    pathName: 'Meet the Kids',
    title: 'Meet the Kids',
    color: '#28CBD3'
  },
  {
    pathName: 'Insights on INSIGHTS Blog',
    title: 'Insights on Insights Blog',
    color: '#28CBD3'
  },
  {
    pathName: 'INSIGHTS Podcast',
    title: 'INSIGHTS Podcast',
    color: '#28CBD3'
  },
  {
    pathName: 'Temperament Profile Survey',
    title: 'Temperament Profile Survey',
    color: '#28CBD3'
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ForParents;