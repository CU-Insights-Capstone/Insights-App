import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MeetTheKids = ({ route }) => {
  const { simple } = route.params;
  const contents = simple == 'true' ? 'Put Simplified Carosel here.' : 'Put Normal Puppet Carosel here.'
  
  return (
    <View style={styles.container}>
      <Text>Meet the Kids</Text>
      <Text>{contents}</Text>
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