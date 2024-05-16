import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.Container}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.LB,
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems:"center",
    marginBottom: "30%"

},
textCategory: {
    color: "white"
}
})