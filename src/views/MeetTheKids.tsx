import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MeetTheKids = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Meet the Kids</Text>
      <Text>(put a carosel here)</Text>
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

export default MeetTheKids;