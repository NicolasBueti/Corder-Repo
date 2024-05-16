import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>¡ALQUILA TU VEHICULO!</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    width: "100%"
  },
  headerText: {
    color: colors.LB,
    fontSize: 30
  }
})