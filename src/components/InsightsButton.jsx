import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const InsightsButton = ({color, pathName, title}) => {
  const navigation = useNavigation();

  // This assume that every button is used for navigation.
  // If needed for anything else, feel free to instead pass 
  // an 'onPress' prop.
  return (
    <View style={styles.buttons}>
      <Button
        color={color}
        onPress={() => navigation.navigate(pathName)}
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
  pathName: '',
  title: 'Button'
}

InsightsButton.propTypes = {
  color: PropTypes.string,
  pathName: PropTypes.string,
  title: PropTypes.title
}

export default InsightsButton;