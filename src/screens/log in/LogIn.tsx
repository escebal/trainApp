import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button/Button';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import styles from './LogIn.styles';

const LogIn = ({navigation}) => {
  return (
    <View style={styles.formContainer}>
      <View>
        <View style={styles.headerFormContainer}>
          <Text style={styles.headerText}>Te damos la bienvenida</Text>
        </View>
        <View>
          <CustomTextInput placeholder="Email" />
          <CustomTextInput placeholder="Password" />
        </View>
        <View style={styles.headerFormContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPassText}>Olvidaste la clave?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Button title="Ingresar" buttonColor="#FF8303" />
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
          <Text>Aun no tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.loginText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogIn;
