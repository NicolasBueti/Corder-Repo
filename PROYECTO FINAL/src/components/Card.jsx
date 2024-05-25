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
    backgroundColor: colors.MLG,
    width: 300,
    height: 200,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    padding: 5,
    margin: 5
},
textCategory: {
    color: colors.Q,
    fontFamily: "SedanSC",
}
})