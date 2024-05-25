import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'

const Header = ({route}) => {

  return (
    <View style={styles.headerContainer}>
      
      <Text style={styles.headerText}>{route.name}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor: colors.MG,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    marginBottom: "3%",
    marginTop: "3%",
    color: colors.Q,
    fontSize: 30,
    fontFamily: "SedanSC",
  }
})