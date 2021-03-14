import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const InsightsButton = ({color, onClick, title}) => {
  return (
    <View style={styles.buttons}>
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
    marginBottom: 20
  },
})

InsightsButton.defaultProps = {
  color: '#FFFFFF',
  title: 'Button'
}

InsightsButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default InsightsButton;