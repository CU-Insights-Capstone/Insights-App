import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

const colors: string[] = [
    '#EC1B24',    // red
    '#FF8D00', // orange
    '#FFC600', // dark yellow
    '#ffe96d', // light yellow
    '#28CBD3', // aqua
    '#00B788', // insights green
    '#09983f', // green
    '#4573af', // blue
    '#db6ea5', // pink
    '#AD056C', // magenta
    '#7e5ea4', // purple
    '#560a8a', // dark purple
    '#ca9a5c', // tan
    '#533518', // brown
    '#fff',    // white
    '#ebedec', // light gray
    '#afafb1', // gray
    '#000',    // black,
];

interface colorPickerProps {
    currentColor: string;
    setColor: (color: string) => void;
}

export const ColorPicker = (props: colorPickerProps) => {

    return (
        <View style={styles.colorContainer}>
            {
                colors.map((color: string) => {
                    const isActive = color === props.currentColor;
                    return <TouchableOpacity style={{
                        backgroundColor:color,
                        width: 30,
                        height: 30,
                        borderRadius: 30,
                        padding: 6,
                        margin: 3,
                        borderWidth: isActive ? 4 : 2,
                        borderColor: '#fff',
                        shadowColor: isActive ? '#000': undefined,
                        shadowOffset: isActive ? { width: 3, height: 4 }: undefined,
                        shadowOpacity: isActive ? 0.6: undefined,
                        shadowRadius: isActive ? 8: undefined,
                        elevation: isActive ? 5: undefined                
                    }}  onPress={() => props.setColor(color)} ></TouchableOpacity>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    sectionButton: {
        width: 30,
        height: 30,
        borderRadius: 30,
        padding: 6,
        margin: 3,
        
    },
    colorContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        flexWrap: 'wrap',
        margin: 7,
    }
});

export default ColorPicker;
