import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../data/Categories.json'
import CategoryCar from '../components/CategoryCar';
import { colors } from '../constants/colors';
console.log(Categories);

const Home = () => {
  return (
    <View style={styles.homeContainer}>
        <Text style={styles.homeText}>¡Selecciona tu categoria!</Text>
        <FlatList 
        keyExtractor={item => item}
        data = {Categories}
        renderItem = {({item}) => <CategoryCar category={item} /> }
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeText: {
        marginTop: "15%",
        color: "white",
        fontSize: 35

    },
    homeContainer: {
        gap: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: colors.GI,

    }
})