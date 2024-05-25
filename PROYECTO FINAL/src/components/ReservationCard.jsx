import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/PendingReservations/pendingReservationsSlice';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ReservationsCard = ({ reservationsCard }) => {
    const dispatch = useDispatch();

    const handleRemoveReservation = () => {
        dispatch(removeReservation(reservationsCard.id));
    };

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{reservationsCard.model} ({reservationsCard.quantity})</Text>
                <Text style={styles.text2}>{reservationsCard.category}</Text>
                <Text style={styles.text2}>${reservationsCard.daily_rental_price}</Text>
            </View>
            <TouchableOpacity onPress={handleRemoveReservation}>
                <MaterialCommunityIcons name="car-off" size={30} color={colors.Q} />
            </TouchableOpacity>
        </View>
    );
};

export default ReservationsCard;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.GI,
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
        fontFamily: "SedanSC",
        fontSize: 19,
        color: colors.Q,
    },
    text2: {
        fontFamily: "SedanSC",
        fontSize: 14,
        color: colors.Q,
    },
});
