import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import InsightsButton from '../components/InsightsButton';

const ForKids = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <InsightsButton
          color={'#AD056C'}
          title={'Meet The Kids!'}
          onClick={() => navigation.navigate('Meet the Kids', { simple: 'true' })} />
        <InsightsButton
          color={'#AD056C'}
          title={'Fun Games!'}
          onClick={() => navigation.navigate('Games')} />

      </View>
    </View>
  );
}

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