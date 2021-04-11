import React from "react";
import FredricoSVG from "../svgs/FredricoSVG";
import SVGColorGame from "../svgs/SVGColorGame";

interface FredricoColoringGameProps {
    
}

const default_color = '#ffffff';

export const FredricoColoringGame = (props: FredricoColoringGameProps) => {
    const [textColor, setTextColor] = React.useState(default_color);
    const [bgOneColor, setbgOneColor] = React.useState(default_color);
    const [bgTwoColor, setbgTwoColor] = React.useState(default_color);
    const [hatColor, setHatColor] = React.useState(default_color);
    const [hairColor, setHairColor] = React.useState(default_color);
    const [faceColor, setFaceColor] = React.useState(default_color);
    const [eyelidColor, setEyelidColor] = React.useState(default_color);
    const [noseColor, setNoseColor] = React.useState(default_color);
    const [mouthColor, setMouthColor] = React.useState(default_color);
    const [collarColor, setCollarColor] = React.useState(default_color);
    const [zipperColor, setZipperColor] = React.useState(default_color);
    const [shirtColor, setShirtColor] = React.useState(default_color);
    const [stripesColor, setStripesColor] = React.useState(default_color);
    const [handsColor, setHandsColor] = React.useState(default_color);

    return <SVGColorGame 
        componentSVG={<FredricoSVG 
            textColor={textColor}
            bgOneColor={bgOneColor}
            bgTwoColor={bgTwoColor}
            hatColor={hatColor}
            hairColor={hairColor}
            faceColor={faceColor}
            eyelidColor={eyelidColor}
            noseColor={noseColor}
            mouthColor={mouthColor}
            collarColor={collarColor}
            zipperColor={zipperColor}
            shirtColor={shirtColor}
            stripesColor={stripesColor}
            handsColor={handsColor}
        />}
        colorButtons={[
            {title: 'Text', onClick: setTextColor},
            {title: 'Background 1', onClick: setbgOneColor},
            {title: 'Background 2', onClick: setbgTwoColor},
            {title: 'Hat', onClick: setHatColor},
            {title: 'Hair', onClick: setHairColor},
            {title: 'Face', onClick: setFaceColor},
            {title: 'Eyelid', onClick: setEyelidColor},
            {title: 'Nose', onClick: setNoseColor},
            {title: 'Mouth', onClick: setMouthColor},
            {title: 'Shirt Collar', onClick: setCollarColor},

            {title: 'Zipper', onClick: setZipperColor},
            {title: 'Shirt', onClick: setShirtColor},
            {title: 'Shirt Stripes', onClick: setStripesColor},
            {title: 'Hands', onClick: setHandsColor},
        ]}
    />
}

export default FredricoColoringGame;