import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { colors } from './src/constants/colors'
import Header from './src/components/Header'
import ModelsCat from './src/screens/ModelsCat'
import CategoriesScreen from './src/screens/CategoriesScreen'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'SedanSC': require('./assets/SedanSC-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  const [categorySelected, setCategorySelected] = useState ("")

 console.log(categorySelected);

  return (
    <View style={styles.container}>
      <Header /> 
      {categorySelected ? ( 
        <ModelsCat categorySelected={categorySelected}
        setCategorySelected = {setCategorySelected} /> 
        ) : (
        <CategoriesScreen setCategorySelected={setCategorySelected} />
        )}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
      marginTop: "10%",
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.MG,
    },
})