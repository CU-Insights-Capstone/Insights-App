import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ForParents = (): JSX.Element => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>For Parents</Text>

      {BUTTONS.map((button, i) => (
        <Button
          color={button.color}
          key={i}
          onPress={() => navigation.navigate(button.pathName)} 
          title={button.title}/>
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