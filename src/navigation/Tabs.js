import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ClientsList from '../screens/clientsList/ClientsList'
import Home from '../screens/home/Home'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Clients List' component={ClientsList}/>
        <Tab.Screen name='Home' component={Home}/>
    </Tab.Navigator>
  )
}

export default Tabs
