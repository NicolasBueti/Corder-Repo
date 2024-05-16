import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { colors } from './src/constants/colors'
import Header from './src/components/Header'
import ModelsCat from './src/screens/ModelsCat'
import CategoriesScreen from './src/screens/CategoriesScreen'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ModelTech from './src/screens/ModelTech'

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
  const [itemIdSelected, setItemIdSelected] = useState("")

  console.log(itemIdSelected);

  return (
    <View style={styles.container}>
      <Header /> 
      {!categorySelected ? ( 
        <CategoriesScreen setCategorySelected={setCategorySelected} />
        ) : (

          !itemIdSelected ?
          <ModelsCat 
            categorySelected={categorySelected}
            setCategorySelected = {setCategorySelected}
            setItemIdSelected={setItemIdSelected} 
        /> 
        : 
        <ModelTech 
          idSelected={itemIdSelected}
          setModelSelected={setItemIdSelected}
        />
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