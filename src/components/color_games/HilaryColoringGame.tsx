import React from "react";
import HilarySVG from "../svgs/HilarySVG";
import SVGColorGame from "../svgs/SVGColorGame";

interface HilaryColoringGameProps {
    
}

const default_color = '#ffffff';

export const HilaryColoringGame = (props: HilaryColoringGameProps) => {
    const [bodyColor, setBodyColor] = React.useState(default_color);
    const [bgColor, setbgColor] = React.useState(default_color);
    const [bgCirclesColor, setbgCirclesColor] = React.useState(default_color);
    const [buttonColor, setButtonColor] = React.useState(default_color);
    const [hairColor, setHairColor] = React.useState(default_color);
    const [overallsColor, setOverallsColor] = React.useState(default_color);
    const [pantsColor, setPantsColor] = React.useState(default_color);
    const [patchColor, setPatchColor] = React.useState(default_color);
    const [shirtColor, setShirtColor] = React.useState(default_color);
    const [textColor, setTextColor] = React.useState(default_color);

    return <SVGColorGame 
        componentSVG={<HilarySVG 
            bodyColor={bodyColor}
            bgColor={bgColor}
            bgCirclesColor={bgCirclesColor}
            buttonColor={buttonColor}
            hairColor={hairColor}
            overallsColor={overallsColor}
            pantsColor={pantsColor}
            patchColor={patchColor}
            shirtColor={shirtColor}
            textColor={textColor}            
        />}
        colorButtons={[
            {title: 'Body', onClick: setBodyColor},
            {title: 'Hair', onClick: setHairColor},
            {title: 'Shirt', onClick: setShirtColor},
            {title: 'Overalls', onClick: setOverallsColor},
            {title: 'Pants', onClick: setPantsColor},
            {title: 'Patch', onClick: setPatchColor},
            {title: 'Buttons', onClick: setButtonColor},
            {title: 'Text', onClick: setTextColor},
            {title: 'Background', onClick: setbgColor},
            {title: 'Background Circles', onClick: setbgCirclesColor},

        ]}
    />
}

export default HilaryColoringGame;