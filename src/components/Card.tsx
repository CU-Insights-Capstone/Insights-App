import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface CardProps {
    color: string;
    onClick?: () => void;
}

const Card = ({color, onClick}: CardProps) => {
    return (
        <View style={[styles.card, {backgroundColor: color}]}>
        </View>)
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '100%',
        fill: 1,
    },
})

export default Card;