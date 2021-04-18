import { WordSearchGameProps } from "./WordSearchGame";

export const generateRandomLetter = (): string => {
    const letterNumber = Math.floor(Math.random() * 26);
    return String.fromCharCode(97 + letterNumber).toUpperCase();
}


export const generateWordSearchGame = (props: WordSearchGameProps): WordSearchGameData => {
    const { rawGame, gameWords } = addAllWordsToGame(props.size, props.words);
    const rows: WordSearchRow[] = [];

    rawGame.forEach((row: string[], row_num: number) => {
        const gameRow: WordSearchLocation[] = row.map((letter: string, col_num: number) => ({
            row: row_num,
            column: col_num,
            value: letter
        }));
        rows.push({
            locations: gameRow
        })
    });

    return {
        words: gameWords,
        rows,
    }
}

export interface WordSearchGameData {
    words: WordSearchWord[];
    rows: WordSearchRow[];
}

interface GeneratedGame {
    rawGame: string[][];
    gameWords: WordSearchWord[];
}

const addAllWordsToGame = (size: number, words: string[]): GeneratedGame => {
    // Generate blank game
    const gameWords: WordSearchWord[] = [];
    const rawGame = generateBlankGame(size);

    //shuffleArray(words);
    let generationFailed = false;
    for(let words_i = 0; words_i < words.length && !generationFailed; words_i++) {
        const word = words[words_i];
        let wordPlaced = false;
        let wordPlaceAttempts = 0;
        while (!wordPlaced && wordPlaceAttempts < 50) {
            const startingLocation = getRandomLocation(size);
            const directionModifier = getRandomDirectionModifier();
            let canWordFit = 
                startingLocation.row + (directionModifier.dY * word.length) >= 0 // testing if overflows on top of search
                && startingLocation.row + (directionModifier.dY * word.length) < size // testing if overflows on bottom of search
                && startingLocation.column + (directionModifier.dX * word.length) >= 0 // testing if overflows on left of search
                && startingLocation.column + (directionModifier.dX * word.length) < size // testing if overflows on right of search
            if (canWordFit) { // checking to see if can place without overwriting existing placed words
                let i = 0;
                const movingLocation: WordSearchLocation = {
                    row: startingLocation.row,
                    column: startingLocation.column,
                    value: ''
                };
                while (canWordFit && i < word.length) {
                    if (rawGame[movingLocation.row][movingLocation.column].length > 0) {
                        canWordFit = false;
                    } else {
                        movingLocation.row += directionModifier.dY;
                        movingLocation.column += directionModifier.dX;
                    }
                    i += 1;
                }
            }
            // if can still fit, place it
            if (canWordFit) {
                let i = 0;
                const movingLocation: WordSearchLocation = {
                    row: startingLocation.row,
                    column: startingLocation.column,
                    value: ''
                };
                while (i < word.length) {
                    rawGame[movingLocation.row][movingLocation.column] = word.charAt(i);
                    movingLocation.row += directionModifier.dY;
                    movingLocation.column += directionModifier.dX;
                    i += 1;
                }
                gameWords.push({
                    word,
                    found: false,
                    startLocation: startingLocation,
                    endLocation: movingLocation
                });
                wordPlaced = true;
            }
            wordPlaceAttempts += 1;
        }
        if (!wordPlaced) {
            generationFailed = true;
        }
    }
    if (generationFailed) { // failed, try again
        return addAllWordsToGame(size, words);
    }
    // fill in random letters
    for (let i = 0; i < rawGame.length; i++) {
        for (let j = 0; j < rawGame[i].length; j++) {
            if (rawGame[i][j].length === 0) rawGame[i][j] = generateRandomLetter();
        }
    }
    return {
        rawGame,
        gameWords,
    }
}

const generateBlankGame = (size: number): string[][] => {
    const rows: string[][] = [];
    for (let i = 0; i < size; i++) {
        rows.push([]);
        for (let j = 0; j < size; j++) {
            rows[i].push('');
        }
    }
    return rows;
}

const shuffleArray = <T>(data: T[]): T[] => {
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
    }
    return data;
}

const getRandomLocation = (size: number): WordSearchLocation => {
    return {
        row: Math.floor(Math.random() * size),
        column: Math.floor(Math.random() * size),
        value: ''
    }
}

interface DirectionModifier {
    dX: number;
    dY: number;
}

const allDirectionModifierOptions: DirectionModifier[] = [
    {dX: 1, dY: 0},
    {dX: 0, dY: 1},
    //{dX: -1, dY: 0},
    //{dX: 0, dY: -1},
    {dX: 1, dY: 1}
];
const getRandomDirectionModifier = (): DirectionModifier => {
    return allDirectionModifierOptions[Math.floor(Math.random() * allDirectionModifierOptions.length)];
}

export interface WordSearchWord {
    word: string;
    found: boolean;
    startLocation: WordSearchLocation;
    endLocation: WordSearchLocation;
}

export interface WordSearchRow {
    locations: WordSearchLocation[];
}

export interface WordSearchLocation {
    row: number;
    column: number;
    value: string;
}