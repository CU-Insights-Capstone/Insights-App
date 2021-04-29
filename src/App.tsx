import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps  } from '@react-navigation/stack';

import Blog from './views/pages/common/Blog';
import ForKids from './views/pages/kids/ForKids';
import ForParents from './views/pages/parents/ForParents';
import ForTeachers from './views/pages/teachers/ForTeachers';
import Games from './views/pages/kids/Games';
import Home from './views/pages/Home';
import MeetTheKids from './views/pages/common/MeetTheKids';
import Podcast from './views/pages/common/Podcasts';
import ColoringGamesMenu from './views/pages/kids/ColoringGamesMenu';
import FredricoColoringGame from './components/color_games/FredricoColoringGame';
import GregoryColoringGame from './components/color_games/GregoryColoringGame';
import HilaryColoringGame from './components/color_games/HilaryColoringGame';
import CorettaColoringGame from './components/color_games/CorettaColoringGame';
import FirstGradeWordSearch from './views/pages/kids/FirstGradeWordSearch';
import KindergartenWordSearch from './views/pages/kids/KindergartenWordSearch';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  return (
      <NavigationContainer theme={INSIGHTSTheme}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>

          <Stack.Screen name='For Parents' component={ForParents} />

          <Stack.Screen name='For Teachers' component={ForTeachers} />

          <Stack.Screen name='For Kids' component={ForKids} />

          <Stack.Screen name='Meet the Kids' component={MeetTheKids} initialParams={{ simple: false }} />

          <Stack.Screen name='INSIGHTS Blog' component={Blog} />

          <Stack.Screen name='INSIGHTS Podcast' component={Podcast} />

          <Stack.Screen name='Games' component={Games} />

          <Stack.Screen name='Coloring Games' component={ColoringGamesMenu}/>

          <Stack.Screen name = 'Kindergarten Word Search' component={KindergartenWordSearch} />
          <Stack.Screen name = 'First Grade Word Search' component={FirstGradeWordSearch} />

          <Stack.Screen name='Fredrico' component={FredricoColoringGame}/>
          <Stack.Screen name='Gregory' component={GregoryColoringGame}/>
          <Stack.Screen name='Hilary' component={HilaryColoringGame}/>
          <Stack.Screen name='Coretta' component={CorettaColoringGame}/>

          
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const INSIGHTSTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#00B788',
    card: '#AD056C',
    text: '#fff'
  },
};

export default App;
