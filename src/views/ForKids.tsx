import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ForKids = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>For Kids</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ForKids;