import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'

import Home from './pages/Home'
import BookList from './pages/BookList'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='BookList' component={BookList} />
      </AppStack.Navigator>

    </NavigationContainer>
  )
}

export default Routes