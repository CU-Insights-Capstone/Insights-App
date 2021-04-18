import React from 'react';
import TextNeutraBold from "../../../components/texts/TextNeutraBold";
import WordSearchGame from '../../../components/word_search/WordSearchGame';
import AppPage from '../../common/AppPage';

const WORD_SEARCH_SIZE = 14;
const WORDS = [
    'Insights',
    'Gregory',
    'Hilary',
    'Fredrico',
    'Coretta'
].map(word => word.toUpperCase());

const WordSearch = (): JSX.Element => {

    const pageContent = (
        <WordSearchGame
            size={WORD_SEARCH_SIZE}
            words={WORDS}
        />
    );

    return <AppPage display={pageContent} title='Word Search' />;
}

export default WordSearch;