import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from './src/constants/colors'
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navigator from './src/navigation/Navigator'
import { Provider } from 'react-redux'
import store from "./src/store"

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
      <Provider store={store}>
      <Navigator />
      </Provider>
    </SafeAreaView>
  )
}
}

export default App

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.MG,
    },
})