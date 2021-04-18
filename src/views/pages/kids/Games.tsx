import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FredricoColoringGame from '../../../components/color_games/FredricoColoringGame';
import GregoryColoringGame from '../../../components/color_games/GregoryColoringGame';
import HilaryColoringGame from '../../../components/color_games/HilaryColoringGame';
import InsightsButton from '../../../components/InsightsButton';
import AppPage from '../../common/AppPage';
 

const Games = () => {
  const navigation = useNavigation();

  const pageContent = (
    <View style={styles.buttonContainer}>
        {BUTTONS.map((button, i) => (
            <InsightsButton
                color={button.color}
                key={i} title={button.title}
                onClick={() => navigation.navigate(button.pathName)}
            />
        ))}
    </View>
  );

  return <AppPage display={pageContent} title='Games' />;
}

const styles = StyleSheet.create({
  buttonContainer: {
      alignItems: 'center',
      width: '100%'
  },
});

const BUTTONS = [
  {
      pathName: 'ColoringGamesMenu',
      title: 'Color Our Puppets',
      color: '#28CBD3'
  },
  {
      pathName: 'WordSearchGame',
      title: 'Word Search',
      color: '#FF8D00'
  },
];

export default Games;
