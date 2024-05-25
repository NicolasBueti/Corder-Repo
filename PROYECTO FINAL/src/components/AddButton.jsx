import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const AddButton = ({
    title = "",
    onPress = () => {},
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: colors.MLG }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 1,
        backgroundColor: colors.MLG,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    text: {
        fontFamily: "SedanSC",
        fontSize: 18,
        color: colors.Q,
    },
});
