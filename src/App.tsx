import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps  } from '@react-navigation/stack';

import ForKids from './views/ForKids';
import ForParents from './views/ForParents';
import ForTeachers from './views/ForTeachers';
import Home from './views/Home';
import MeetTheKids from './views/MeetTheKids';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  return (
      <NavigationContainer theme={INSIGHTSTheme}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
          <Stack.Screen name='For Parents' component={ForParents} />

          <Stack.Screen name='For Teachers' component={ForTeachers} />

          <Stack.Screen name='For Kids' component={ForKids} />

          <Stack.Screen name='Meet the Kids' component={MeetTheKids} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const INSIGHTSTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#00B788',
  },
};

export default App;