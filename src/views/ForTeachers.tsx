import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForTeachers = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>For Teachers</Text>

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
    color: '#AD056C'
  },
  {
    pathName: 'Insights on INSIGHTS Blog',
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