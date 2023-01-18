import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

const Button = ({title, onPress, buttonColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: buttonColor || '#FFF0E1'}}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
