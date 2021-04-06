import React from "react";
import GregorySVG from "../svgs/GregorySVG";
import SVGColorGame from "../svgs/SVGColorGame";

interface GregoryColoringGameProps {
    
}

const default_color = '#ffffff';

export const GregoryColoringGame = (props: GregoryColoringGameProps) => {
    const [hairColor, setHairColor] = React.useState(default_color);
    const [faceColor, setFaceColor] = React.useState(default_color);

    return <SVGColorGame 
        componentSVG={<GregorySVG 
            hairColor={hairColor}
            faceColor={faceColor}
        />}
        colorButtons={[
            {title: 'Hair', onClick: setHairColor},
            {title: 'Face', onClick: setFaceColor},
        ]}
    />
}

export default GregoryColoringGame;