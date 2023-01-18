import React from 'react';
import { TextInput } from 'react-native';
import styles from './CustomTextInput.styles'

const CustomTextInput = ({placeholder}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.container}
    />
  );
};

export default CustomTextInput;
