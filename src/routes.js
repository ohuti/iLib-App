import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createSwitchNavigator, createAppContainer } from "react-navigation"


import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import BookList from './pages/BookList'
import RoomList from './pages/RoomList'

//const AppStack = createStackNavigator()

export default createAppContainer(
createSwitchNavigator({
  Login,
  Register,
  Home,
  BookList,
  RoomList
})
);

/*
const Routes = () => {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='Register' component={Register} />
        
        
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='BookList' component={BookList} />
        <AppStack.Screen name='RoomList' component={RoomList} />

      </AppStack.Navigator>

    </NavigationContainer>
  )
}

export default Routes */