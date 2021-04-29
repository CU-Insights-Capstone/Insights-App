import React from 'react';
import { View } from 'react-native';
import TextNeutraBold from "../../../components/texts/TextNeutraBold";
import WordSearchGame from '../../../components/word_search/WordSearchGame';
import AppPage from '../../common/AppPage';

const WORD_SEARCH_SIZE = 12;
const WORDS = [
    'Fredrico',
    'Coretta',
    'Hilary',
    'Gregory',
    'friendly',
    'cautious',
    'grumpy',
    'unique',
    'easy',
    'challenging'
].map(word => word.toUpperCase());

const WordSearch = (): JSX.Element => {

    const pageContent = (
        <View style={{alignItems: 'center'}}>
            <TextNeutraBold style={{fontSize:20, padding:20, color:'white'}}>Find a word by tapping on it's first and last letter.</TextNeutraBold>
            <WordSearchGame
                size={WORD_SEARCH_SIZE}
                words={WORDS}
            />
        </View>
    );

    return <AppPage display={pageContent} title='Kindergarten Word Search' />;
}

export default WordSearch;
