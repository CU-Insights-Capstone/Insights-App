import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawingButton } from "./common";
import ColorPicker from "../ColorPicker";


interface SVGColorGameProps {
    componentSVG: JSX.Element;
    colorButtons: DrawingButton[];
}

export const SVGColorGame = (props: SVGColorGameProps) => {
    const [selectedColor, setSelectedColor] = React.useState('#000000');

    return (
        <View style={{marginBottom:10, marginHorizontal:10}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center', flexWrap: 'wrap'}}>
            {
                props.colorButtons.map(
                    (button: DrawingButton) => 
                        <TouchableOpacity style={styles.sectionButton} onPress={() => button.onClick(selectedColor)}>
                            <Text style={styles.buttonText}>{button.title}</Text>
                        </TouchableOpacity>
                    )
            }
            </View>
            <ColorPicker setColor={setSelectedColor}/>
            {props.componentSVG}
            
        </View>
    )
}

const styles = StyleSheet.create({
    sectionButton: {
        width: '40%',
        backgroundColor:'#AD056C',
        borderRadius: 5,
        padding: 3,
        margin: 3,
        borderWidth: 3,
        borderColor: '#fff',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color:'#ffffff',
        textAlign: 'center',
    }
});

export default SVGColorGame;
