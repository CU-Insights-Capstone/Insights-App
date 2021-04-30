import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawingButton } from "./common";
import TextNeutraBold from '../texts/TextNeutraBold';
import ColorPicker from "../ColorPicker";
import AppPage from "../../views/common/AppPage";


interface SVGColorGameProps {
    componentSVG: JSX.Element;
    colorButtons: DrawingButton[];
    pageTitle: string;
}

export const SVGColorGame = (props: SVGColorGameProps) => {
    const [selectedColor, setSelectedColor] = React.useState('#000000');

    const pageContent = (
        <View style={{marginBottom:10, marginHorizontal:10}}>
            <TextNeutraBold style={styles.text}> Select a color then a section to watch your puppet come to life! </TextNeutraBold>
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
            <ColorPicker setColor={setSelectedColor} currentColor={selectedColor}/>
            {props.componentSVG}
            
        </View>
    );
    return <AppPage display={pageContent} title={props.pageTitle} />;
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
    },
    text: {
        color:'#ffffff', 
        fontSize: 20, 
        marginBottom: 10, 
        marginHorizontal: 15
    }
});

export default SVGColorGame;
