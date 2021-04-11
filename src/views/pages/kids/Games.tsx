import React from 'react';
import { Text, View } from 'react-native';
import FredricoColoringGame from '../../../components/color_games/FredricoColoringGame';
import GregoryColoringGame from '../../../components/color_games/GregoryColoringGame';
import HilaryColoringGame from '../../../components/color_games/HilaryColoringGame';
import AppPage from '../../common/AppPage';
 

const Games = () => {

  const pageContent = (
    <View>
      <Text>
        <GregoryColoringGame />
        {/* <HilaryColoringGame /> */}
        {/* <FredricoColoringGame /> */}
      </Text>
    </View>
  );

  return <AppPage display={pageContent} title='Games' />;
}

export default Games;