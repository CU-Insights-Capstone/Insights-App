import React from 'react';
import { StyleSheet, View } from 'react-native';
import { generateRandomLetter, generateWordSearchGame, WordSearchLocation, WordSearchRow } from './helpers';

export interface WordSearchGameProps {
    size: number;
    words: string[];
}

const WordSearchGame = (props: WordSearchGameProps): JSX.Element => {
    const gameData = generateWordSearchGame(props);

    const rows = gameData.rows;

    const game = (
        <View style={styles.gameContainer}>
            <table>
                <tbody>
                    {
                        rows.map((row: WordSearchRow, i: number) => {
                            const cells = row.locations.map(
                                (location: WordSearchLocation, i: number) => 
                                    <td key={i} align='center' >{location.value}</td>
                            );
                            return <tr key={i}>{cells}</tr>;
                        })
                    }
                </tbody>
            </table>
            <ul>
                { 
                    props.words.map((word: string, i: number) => <li key={i}>{ word }</li>)
                }
            </ul>
        </View>
    );
    return game;
}
const styles = StyleSheet.create({
    gameContainer: {
        width: '90%',
        backgroundColor: '#eeeeee',
    }
});

export default WordSearchGame;