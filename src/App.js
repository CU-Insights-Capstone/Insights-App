import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import ParentsHomepage from './views/ParentsHomepage';
import TeachersHomepage from './views/TeachersHomepage';
import KidsHomepage from './views/KidsHomepage';

const pages = [
  {page_id: 1, title: 'Parents', content: <ParentsHomepage/>},
  {page_id: 2, title: 'Teachers', content: <TeachersHomepage/>},
  {page_id: 3, title: 'Kids', content: <KidsHomepage/>},
];


// interface AppPage {
//   page_id: number;
//   title: string;
//   content: JSX.Element;
// }

export default function App() {
  const [page, setPage] = useState(0);

  if(page > 0) {
    return pages[page - 1].content;
  }
  
  return (
    <View style={styles.background}>
      {
        pages.map((page) => <View style={styles.buttons}><Button onPress={() => setPage(page.page_id)} title={page.title}/><br /></View>)
      }
    </View>
  );
} 

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#00B788',
    height: '100%'
  },
  buttons: {
    maxWidth: '150px'
  }
})