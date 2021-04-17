import React from "react";
import GregorySVG from "../svgs/GregorySVG";
import SVGColorGame from "../svgs/SVGColorGame";

interface GregoryColoringGameProps {
    
}

const default_color = '#ffffff';
/*
interface GregorySVGProps {
  hairColor: string;
  faceColor: string;
  backgroundColor1: string;
  backgroundColor2: string;
  shirtColor: string;
  shirtCuffsColor: string;
  handColor: string;
  flagColor: string;
  titleColor: string;
}

*/
export const GregoryColoringGame = (props: GregoryColoringGameProps) => {
    const [hairColor, setHairColor] = React.useState(default_color);
    const [faceColor, setFaceColor] = React.useState(default_color);
    const [backgroundColor1, setBackgroundColor1] = React.useState(default_color);
    const [backgroundColor2, setBackgroundColor2] = React.useState(default_color);
    const [shirtColor, setShirtColor] = React.useState(default_color);
    const [shirtCuffsColor, setShirtCuffsColor] = React.useState(default_color);
    const [handColor, setHandColor] = React.useState(default_color);
    const [flagColor, setFlagColor] = React.useState(default_color);
    const [titleColor, setTitleColor] = React.useState(default_color);

    return <SVGColorGame 
        componentSVG={<GregorySVG 
            hairColor={hairColor}
            faceColor={faceColor}
            backgroundColor1={backgroundColor1}
            backgroundColor2={backgroundColor2}
            shirtColor={shirtColor}
            shirtCuffsColor={shirtCuffsColor}
            handColor={handColor}
            flagColor={flagColor}
            titleColor={titleColor}
        />}
        colorButtons={[
            {title: 'Hair', onClick: setHairColor},
            {title: 'Face', onClick: setFaceColor},
            {title: 'Shirt', onClick: setShirtColor},
            {title: 'Cuff', onClick: setShirtCuffsColor},
            {title: 'Hand', onClick: setHandColor},
            {title: 'Flag', onClick: setFlagColor},
            {title: 'Background', onClick: setBackgroundColor1},
            {title: 'Stripes', onClick: setBackgroundColor2},
            {title: 'Title', onClick: setTitleColor},
        ]}
    />
}

export default GregoryColoringGame;
