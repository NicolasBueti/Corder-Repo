import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

const ReservationsCard = ({ reservationsCard }) => {
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{reservationsCard.model} ({reservationsCard.quantity})</Text>
                <Text style={styles.text2}>{reservationsCard.category}</Text>
                <Text style={styles.text2}>${reservationsCard.daily_rental_price}</Text>
            </View>
            <Entypo name="trash" size={30} color="black" />
        </View>
    );
};

export default ReservationsCard;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.platinum,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.teal400,
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 14,
        color: colors.teal600,
    },
});
