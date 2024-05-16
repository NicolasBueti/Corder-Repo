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
    backgroundColor: "black",
    width: 300,
    height: 200,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
},
textCategory: {
    color: "white"
}
})