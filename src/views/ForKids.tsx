import React from 'react';
import { StyleSheet, View } from 'react-native';

import InsightsButton from '../components/InsightsButton';

const ForKids = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {BUTTONS.map((button, i) => (
          <InsightsButton color={button.color} pathName={button.pathName} key={i} title={button.title} />
        ))}
      </View>
    </View>
  );
}

const BUTTONS = [
  {
    pathName: 'Meet The Kids - Kids',
    title: 'Meet The Kids!',
    color: '#AD056C'
  },
  {
    pathName: 'Games',
    title: 'Fun Games!',
    color: '#AD056C'
  },
]

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ForKids;