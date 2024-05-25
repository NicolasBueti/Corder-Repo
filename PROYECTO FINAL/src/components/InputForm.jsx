import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors';

const InputForm = ({
    label, 
    onChange, 
    error = "",
    isSecure = false
}) => {
    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style ={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? 
        <Text style = {styles.error}>
            {error}
        </Text>
        :
        null
    }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    subtitle: {
        width: '90%',
        fontSize: 16,
        fontFamily: 'SedanSC'
    },
    error: {
        paddintTop: 2,
        fontSize: 16,
        color: 'red',
        fontFamily: 'SedanSC',
    },
    input: {
        width: '90%',
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: colors.MLG,
        padding: 2,
        fontFamily: 'SedanSC',
        fontSize: 14,
    }
})