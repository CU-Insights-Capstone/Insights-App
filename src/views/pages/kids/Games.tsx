import React from 'react';
import { Text, View } from 'react-native';
import AppPage from '../../common/AppPage';
 

const Games = () => {

  const pageContent = (
    <View>
      <Text>
        Games here.
      </Text>
    </View>
  );

  return <AppPage display={pageContent} title='Games' />;
}

export default Games;