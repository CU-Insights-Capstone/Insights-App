import React from 'react';
import TextNeutraBold from '../texts/TextNeutraBold';

interface WordSearchCellProps {
    onClick: () => void;
    highlighted: boolean;
    highlightColor: string;
    value: string;
    crossedOut: boolean;
}

const WordSearchCell = (props: WordSearchCellProps): JSX.Element => {
    return (
        <td align='center'
            onClick={props.onClick}
            style={{
                backgroundColor: props.highlighted ? props.highlightColor : (props.crossedOut ? '#00B788' : 'white'),
                textDecoration: props.crossedOut ? 'line-through' : undefined,
            }}
        >
            <TextNeutraBold>{ props.value }</TextNeutraBold>
        </td>
    );
};

export default WordSearchCell;
