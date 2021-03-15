import React from 'react';
import { ImageBackground, View } from 'react-native';
import PageTitle from './PageTitle';
import globalStyles from '../../../styles/global';

const bg = require('../../assets/background.png');

interface AppPageProps {
    display: JSX.Element;
    title?: string;
}

const AppPage = (props: AppPageProps): JSX.Element => {
    return (
        <ImageBackground source={bg} style={globalStyles.backgroundImage}>
          { props.title && <PageTitle title={props.title}/> }
          <View style={globalStyles.container}>
              { props.display }
          </View>
        </ImageBackground>
      );
}

export default AppPage;
