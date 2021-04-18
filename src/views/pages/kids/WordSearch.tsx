import React from 'react';
import TextNeutraBold from "../../../components/texts/TextNeutraBold";
import AppPage from '../../common/AppPage';

const WordSearch = (): JSX.Element => {
    const pageContent = (
        <TextNeutraBold>Hello</TextNeutraBold>
    );

    return <AppPage display={pageContent} title='Word Search' />;
}

export default WordSearch;