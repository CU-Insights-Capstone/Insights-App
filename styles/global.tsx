import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    alignCenter: {
        textAlign: 'center'
    },
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
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5
    },
    horizontalAlign: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    setColorWhite: {
        color: 'white'
    },
    textDropShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {
            width: 3,
            height: 3,
        },
        textShadowRadius: 4.65,
        elevation: 6,
    },
});

export default globalStyles;
