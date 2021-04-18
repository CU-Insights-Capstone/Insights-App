import React from "react";
import CorettaSVG from "../svgs/CorettaSVG";
import SVGColorGame from "../svgs/SVGColorGame";

interface CorettaColoringGameProps {
    
}

const default_color = '#ffffff';

export const CorettaColoringGame = (props: CorettaColoringGameProps) => {
    const [bodyColor, setBodyColor] = React.useState(default_color);
    const [noseColor, setNoseColor] = React.useState(default_color);
    const [hairColor1, setHairColor1] = React.useState(default_color);
    const [hairColor2, setHairColor2] = React.useState(default_color);
    const [hairTieColor, setHairTieColor] = React.useState(default_color);
    const [shirtColor, setShirtColor] = React.useState(default_color);
    const [collarColor, setCollarColor] = React.useState(default_color);
    const [lipColor, setLipColor] = React.useState(default_color);
    const [eyelidColor, setEyelidColor] = React.useState(default_color);
    const [backgroundColor1, setBackgroundColor1] = React.useState(default_color);
    const [backgroundColor2, setBackgroundColor2] = React.useState(default_color);
    const [textColor, setTextColor] = React.useState(default_color);
  
    return <SVGColorGame 
        componentSVG={<CorettaSVG 
            bodyColor={bodyColor}
            noseColor={noseColor}
            lipColor={lipColor}
            eyelidColor={eyelidColor}
            hairColor1={hairColor1}
            hairColor2={hairColor2}
            hairTieColor={hairTieColor}
            shirtColor={shirtColor}
            collarColor={collarColor}
            backgroundColor1={backgroundColor1}
            backgroundColor2={backgroundColor2}
            textColor={textColor}
        />}
        colorButtons={[
            {title: 'Title', onClick: setTextColor},
            {title: 'Body', onClick: setBodyColor},
            {title: 'Nose', onClick: setNoseColor},
            {title: 'Lip', onClick: setLipColor},
            {title: 'Eyelid', onClick: setEyelidColor},
            {title: 'Hair Ties', onClick: setHairTieColor},
            {title: 'Hair 1', onClick: setHairColor1},
            {title: 'Hair 2', onClick: setHairColor2},
            {title: 'Shirt', onClick: setShirtColor},
            {title: 'Collar', onClick: setCollarColor},
            {title: 'Background 1', onClick: setBackgroundColor1},
            {title: 'Background 2', onClick: setBackgroundColor2},
        ]}
        pageTitle='Coretta'
    />
}

export default CorettaColoringGame;
