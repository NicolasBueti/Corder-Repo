import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../data/Categories.json'
import CategoryCard from '../components/CategoryCard';
import { colors } from '../constants/colors';
import Card from '../components/Card';
console.log(Categories);

const Home = () => {
  return (
    <View style={styles.homeContainer}>
        <Text style={styles.homeText}>¡Selecciona tu categoria!</Text>
        <FlatList 
        keyExtractor={item => item}
        data = {Categories}
        renderItem = {({item}) => <CategoryCard category={item} /> }
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeText: {
        marginTop: 10,
        color: "white",
        fontSize: 35

    },
    homeContainer: {
        gap: "30%",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: colors.B,

    }
})