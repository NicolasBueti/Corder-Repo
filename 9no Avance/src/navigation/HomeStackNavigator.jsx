import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import ModelsCat from '../screens/ModelsCat'
import ModelTech from '../screens/ModelTech'
import Header from '../components/Header'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator ()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
          //initialRouteName='Home'
          initialRouteName='CategoriesScreen'
          screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen 
                component={CategoriesScreen}
                name='CategoriesScreen'
            />
            <Stack.Screen 
                component={ModelsCat}
                name='ModelsCat'
            />
            <Stack.Screen 
                component={ModelTech}
                name='ModelTech'
            />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})