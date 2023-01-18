import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screens/log in/LogIn';
import SignIn from '../screens/sign in/SignIn';
import Welcome from '../screens/welcome/Welcome';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name='Homi' component={Tabs} />
            <Stack.Screen 
                name="Bienvenida"
                component={Welcome}
            />
            <Stack.Screen 
              name="Registro"
              component={SignIn}
            />
            <Stack.Screen 
              name="Ingreso"
              component={LogIn}
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
