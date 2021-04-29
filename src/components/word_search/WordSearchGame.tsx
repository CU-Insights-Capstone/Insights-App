import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import TextNeutraBold from '../texts/TextNeutraBold';
import { areLocationsTheSame, generateRandomLetter, generateWordSearchGame, getAllLocationsBetweenTwoPoints, handleClickPairInGame, handleClickReturnWordIfCorrect, WordSearchGameData, WordSearchLocation, WordSearchRow, WordSearchWord } from './helpers';
import WordSearchCell from './WordSearchCell';

export interface WordSearchGameProps {
    size: number;
    words: string[];
}

const cellIsInHighlightedCells = (cell: WordSearchLocation, cells: WordSearchLocation[]): boolean => {
    for(let i = 0; i < cells.length; i++) {
        if(cells[i].column === cell.column && cells[i].row === cell.row) return true;
    }
    return false;
}

enum WordSelectResults {
    correct = '#FFE96D',
    failure = 'red',
    selecting = '#28CBD3'
}

const WordSearchGame = (props: WordSearchGameProps): JSX.Element => {
    const [gameData, setGameData] = React.useState(generateWordSearchGame(props));
    const [gameFinished, setGameFinished] = React.useState(false);
    const [firstClick, setFirstClick] = React.useState<WordSearchLocation | null>(null);
    const [secondClick, setSecondClick] = React.useState<WordSearchLocation | null>(null);
    const [selectedState, setSelectedState] = React.useState(WordSelectResults.selecting);


    const crossedOutCells: WordSearchLocation[] = [];
    gameData
        .words
        .filter((word: WordSearchWord) => word.found)
        .forEach((word: WordSearchWord) => 
            getAllLocationsBetweenTwoPoints(word.startLocation, word.endLocation).forEach(location => crossedOutCells.push(location))
        );
    const highlightedCells: WordSearchLocation[] = [];
    if (firstClick && !secondClick) {
        highlightedCells.push(firstClick);
    } else if (firstClick && secondClick) {
        if(
            (firstClick.column === secondClick.column && firstClick.row === secondClick.row)
            || !(firstClick.column === secondClick.column 
            || firstClick.row === secondClick.row 
            || (secondClick.row - firstClick.row) === (secondClick.column - firstClick.column))
        ) {
            // if invalid click
            setFirstClick(null);
            setSecondClick(null);
        } else {
            // if valid click
            let x = firstClick.column;
            let y = firstClick.row;
            const dX = Math.sign(secondClick.column - firstClick.column);
            const dY = Math.sign(secondClick.row - firstClick.row);
            highlightedCells.push(firstClick);
            while (x !== secondClick.column || y !== secondClick.row) {
                x += dX;
                y += dY;
                highlightedCells.push({
                    row: y,
                    column: x,
                    value: ''
                });
            }
        }
    }

    const handleClick = (location: WordSearchLocation) => {
        if (gameFinished) return;
        if (firstClick === null) {
            setFirstClick(location);
        } else if (secondClick === null){
            setSecondClick(location);
        }
    };

    useEffect(() => {
        if(firstClick && secondClick) {
            const {word: respWord, game: respGame} = handleClickReturnWordIfCorrect(gameData, firstClick, secondClick);
            setSelectedState(!!respWord ? WordSelectResults.correct : WordSelectResults.failure);
            setTimeout(() => {
                setGameData(respGame);
                setFirstClick(null);
                setSecondClick(null);
                setSelectedState(WordSelectResults.selecting);
                if (!!respWord) {
                    const unsolvedWordExists = !!gameData.words.find(word => !word.found);
                    setGameFinished(!unsolvedWordExists);
                }
            }, 1000);
        }
    }, [firstClick, secondClick]);

    const game = (
        <View style={styles.gameContainer}>
            <table>
                <tbody>
                    {
                        gameData.rows.map((row: WordSearchRow, row_num: number) => {
                            const cells = row.locations.map(
                                (location: WordSearchLocation, col_num: number) =>
                                    <WordSearchCell 
                                        key={col_num}
                                        onClick={() => handleClick(location)}
                                        highlighted={cellIsInHighlightedCells(location, highlightedCells)}
                                        crossedOut={cellIsInHighlightedCells(location, crossedOutCells)}
                                        highlightColor={selectedState}
                                        value={location.value}
                                    />
                            );
                            return <tr key={row_num}>{cells}</tr>;
                        })
                    }
                </tbody>
            </table>
            <ul>
                { 
                    gameData.words.map((word: WordSearchWord, i: number) => 
                        <li key={i} style={{textDecoration: word.found ? 'line-through' : undefined}}>
                            <TextNeutraBold>{ word.word }</TextNeutraBold>
                        </li>)
                }
            </ul>
            <View style={{alignItems: 'center'}}>
                {gameFinished && <TextNeutraBold style={{fontSize:30, padding:20, color: '#00B788'}}>Game Complete!</TextNeutraBold>}
            </View>
        </View>
    );
    return game;
}
const styles = StyleSheet.create({
    gameContainer: {
        width: '90%',
        backgroundColor: '#dddddd',
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 2,
        borderRadius: 10,
        marginBottom: 10,
    }
});

export default WordSearchGame;
