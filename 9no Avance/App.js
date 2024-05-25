import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from './src/constants/colors'
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navigator from './src/navigation/Navigator'

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    SedanSC: require('./assets/SedanSC-Regular.ttf'),
  })

  if (!fontsLoaded || fontError) {
    return null
  }

  if (fontsLoaded && !fontError) {

  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  )
}
}

export default App

const styles = StyleSheet.create({
    container: {
      marginTop: "10%",
      flex: 1,
      backgroundColor: colors.MG,
    },
})