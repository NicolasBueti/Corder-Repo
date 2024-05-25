import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import ModelsCat from '../screens/ModelsCat'
import ModelTech from '../screens/ModelTech'
import Header from '../components/Header'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator ()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          //initialRouteName='Home'
          screenOptions={
            ({route}) => (
              {
                header: () => {
                  return <Header title={
                    route.name === 'CategoriesScreen' ? '¡ALQUILA TU VEHICULO!' : 
                    route.name === 'ModelsCat' ? 
                    route.params.category : "Informacion del Modelo" } />
                }
              }
            )
          }
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
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})