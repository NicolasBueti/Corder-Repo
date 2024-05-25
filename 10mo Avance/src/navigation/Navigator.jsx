import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import ModelsCat from '../screens/ModelsCat'
import ModelTech from '../screens/ModelTech'
import Header from '../components/Header'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './HomeStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
      {/*<HomeStackNavigator /> */}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})