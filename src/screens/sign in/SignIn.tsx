import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button/Button';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import styles from './SignIn.styles';

const SignIn = ({navigation}) => {
    return (
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerFormContainer}>
            <Text style={styles.headerText}> Te invitamos a </Text>
            <Text style={styles.headerBoldText}> Crear una cuenta </Text>
          </View>
          <View style={styles.inputsContainer}>
            <CustomTextInput placeholder="Primer nombre" />
            <CustomTextInput placeholder="Apellidos" />
            <CustomTextInput placeholder="Email" />
            <CustomTextInput placeholder="Password" />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Button title="Registrarse" buttonColor="#FF8303"/>
          <Text>o</Text>
          <View style={styles.mediaContainer}>
            <TouchableOpacity style={styles.mediaButton}>
              <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaButton}>
              <Text>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginContainer}>
            <Text>Ya tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Ingreso')}>
              <Text style={styles.loginText} >Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  export default SignIn
