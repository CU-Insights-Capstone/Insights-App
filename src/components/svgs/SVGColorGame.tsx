import React from "react";
import { Button, View } from "react-native";
import { DrawingButton } from "./common";

interface SVGColorGameProps {
    componentSVG: JSX.Element;
    colorButtons: DrawingButton[];
}

export const SVGColorGame = (props: SVGColorGameProps) => {
    const [selectedColor, setSelectedColor] = React.useState('#000000');

    return (
        <View>
            {
                props.colorButtons.map(
                    (button: DrawingButton) => 
                        <Button onPress={() => button.onClick(selectedColor)} title={button.title} />
                    )
            }
            {props.componentSVG}
            {/* RENDER COLOR PALLETE (pass in setSelectedColor so it can updated selectedColor)*/}
        </View>
    )
}

export default SVGColorGame;