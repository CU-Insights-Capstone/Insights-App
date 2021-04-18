import React from 'react';

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
                backgroundColor: props.highlighted ? props.highlightColor : (props.crossedOut ? '#dddddd' : 'white'),
                textDecoration: props.crossedOut ? 'line-through' : undefined,
            }}
        >
            { props.value }
        </td>
    );
};

export default WordSearchCell;