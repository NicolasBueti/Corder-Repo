import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { colors } from './src/constants/colors'

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
      marginTop: "10%",
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.B,
    },
})