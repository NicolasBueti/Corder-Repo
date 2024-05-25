import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../constants/colors";

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={keyword}
        onChangeText={setKeyword}
      />
      {error ? <Text style={styles.errorr}>{error}</Text> : null}

      <Pressable onPress={() => onSearch(keyword)}>
        <MaterialCommunityIcons name="magnify" size={24} color={colors.BI} />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <MaterialCommunityIcons name="eraser" size={24} color={colors.BI} />
      </Pressable>
      <Pressable onPress={goBack}>
        <MaterialCommunityIcons name="arrow-left" size={24} color={colors.BI} />
      </Pressable>
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.W,
    color: colors.BI,
    borderRadius: 10,
    fontFamily: "SedanSC",
  },
  errorr:{
    textAlign: "center",
    color: 'tomato',
    fontSize: 14,
    fontFamily: 'SedanSC'
  }
});