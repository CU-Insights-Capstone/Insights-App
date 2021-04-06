import React from "react";
import {Button, View} from "react-native";

const colors: string[] = [
    '#fff',
    '#000',
    '#f00',
    '#0f0',
    '#00f'
];

interface colorPickerProps {
    setColor: (color: string) => void;
}

export const ColorPicker = (props: colorPickerProps) => {

    return (
        <View>
            {
                colors.map((color: string) => {
                    return <Button title={'.'} color={color} onPress={() => props.setColor(color)} />
                })
            }
        </View>
    )
}

export default ColorPicker;