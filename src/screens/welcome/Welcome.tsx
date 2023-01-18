import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './Welcome.styles';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Lleva el registro de tus clientes </Text>
      <Button
        title="Soy nuevo"
        onPress={() => navigation.navigate('Registro')}
      />
      <Text>Ya eres miembro?</Text>
      <Button title="Ingresar" onPress={() => navigation.navigate('Ingreso')} />
    </View>
  );
};

export default Welcome;
