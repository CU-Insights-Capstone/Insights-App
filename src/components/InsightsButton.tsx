import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import globalStyles from "../../styles/global";

interface InsightsButtonProps {
  color: string;
  onClick: () => void;
  title: string;
}

const InsightsButton = ({color = '#FFFFFF', onClick, title = 'Button'}: InsightsButtonProps) => {
  return (
      <View style={[styles.buttons, globalStyles.dropShadow]}>
        <Button
            color={color}
            onPress={onClick}
            title={title} />
      </View>)
}

const styles = StyleSheet.create({
  buttons: {
    width: '70%',
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: '10%',
  },
})

export default InsightsButton;