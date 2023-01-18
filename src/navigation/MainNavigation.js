import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/log in/LogIn';
import SignIn from '../screens/sign in/SignIn';
import Welcome from '../screens/welcome/Welcome';
import Tabs from './Tabs';
import AddClient from '../screens/addClient/AddClient';
import Home from '../screens/home/Home';
import {SafeAreaProvider, SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          >
          <Stack.Screen name="Bienvenida" component={Welcome} />
          <Stack.Screen name="Registro" component={SignIn} />
          <Stack.Screen name="Ingreso" component={LogIn} />
          <Stack.Screen name="Homi" component={Tabs} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ClientForm" component={AddClient} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;
