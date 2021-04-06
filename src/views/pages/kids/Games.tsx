import React from 'react';
import { Text, View } from 'react-native';
import GregoryColoringGame from '../../../components/color_games/GregoryColoringGame';
import AppPage from '../../common/AppPage';
 

const Games = () => {

  const pageContent = (
    <View>
      <Text>
        <GregoryColoringGame />
      </Text>
    </View>
  );

  return <AppPage display={pageContent} title='Games' />;
}

export default Games;