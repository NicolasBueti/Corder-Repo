import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../data/Categories.json'
import CategoryCar from '../components/CategoryCar';
import { colors } from '../constants/colors';

const CategoriesScreen = ({ route, navigation}) => {
  return (
    <View style={styles.CategoriesContainer}>
        <Text style={styles.CategoriesText}>¡Selecciona tu categoria!</Text>
        <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        data = {Categories}
        renderItem = {({item}) => 
          <CategoryCar 
            navigation={navigation} 
            category={item} /> }
          />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  CategoriesText: {
    marginTop: "5%",
    marginBottom: "5%",
    color: colors.MG,
    fontSize: 33,
    fontFamily: "SedanSC",
  },
    CategoriesContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: colors.Q,
    }
})