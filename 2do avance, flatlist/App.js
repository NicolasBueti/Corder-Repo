import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { colors } from './src/constants/colors'
import Header from './src/components/Header'
import ModelsCat from './src/screens/ModelsCat'

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      { /* <Home /> */} 
      <ModelsCat />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
      marginTop: "10%",
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.GI,
    },
})