import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    horizontalAlign: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    setColorWhite: {
        color: 'white'
    },
    textDropShadow: {
        textShadowColor: "#696969",
        textShadowOffset: {
            width: 3,
            height: 3,
        },
        textShadowRadius: 4.65,

        elevation: 6,
    },
});

export default globalStyles;
