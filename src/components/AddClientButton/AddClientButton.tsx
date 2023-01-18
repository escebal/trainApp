import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './AddClientButton.styles';

const AddClientButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => navigation.navigate('ClientForm')}>
      <Text>+</Text>
    </TouchableOpacity>
  );
};

export default AddClientButton;
