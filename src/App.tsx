import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ParentsHomepage from './views/ParentsHomepage';
import TeachersHomepage from './views/TeachersHomepage';
import KidsHomepage from './views/KidsHomepage';
import AppPage, { AppPageDetails, AppPageTypes } from './nav/AppPage';
import MainMenu from './views/MainMenu';

const App = (): JSX.Element => {
  const [page, setPage] = useState(AppPageTypes.MainMenu);

  // object that maps AppPageType -> AppPageDetails
  const pageDetails: {[key: string]: AppPageDetails; } = {
    [AppPageTypes.ParentsHomepage]: {
      type: AppPageTypes.ParentsHomepage,
      pageTitle: 'Parents',
      content: <ParentsHomepage />,
      backButtonDest: AppPageTypes.MainMenu
    },
    [AppPageTypes.TeachersHomepage]: {
      type: AppPageTypes.TeachersHomepage,
      pageTitle: 'Teachers',
      content: <TeachersHomepage />,
      backButtonDest: AppPageTypes.MainMenu
    },
    [AppPageTypes.KidsHomepage]: {
      type: AppPageTypes.KidsHomepage,
      pageTitle: 'Kids',
      content: <KidsHomepage />,
      backButtonDest: AppPageTypes.MainMenu
    },
  };
  
  return <View style={GLOBAL_STYLES.global}>
    {
      page === AppPageTypes.MainMenu
        ? <MainMenu setPage={setPage}/>
        : <AppPage setPage={setPage} details={pageDetails[page]}/>
    }
  </View>;
} 

export const GLOBAL_STYLES = StyleSheet.create({
  global: {
    backgroundColor: '#00B788',
    height: '100%'
  },
  buttons: {
    maxWidth: '150px'
  }
});

export default App;