import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { colors } from "../constants/colors";

const PickUpCard = ({ pickup }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleDetailPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const total = (pickup.items || []).reduce(
        (acc, currentItem) => acc + (currentItem.daily_rental_price * currentItem.quantity),
        0
    );

    const firstItem = pickup.items[0] || {};

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Modelo: {firstItem.model}</Text>
                <Text style={styles.text2}>Precio Total: ${total}</Text>
                <Text style={styles.text2}>Días: {firstItem.quantity}</Text>
            </View>
            <TouchableOpacity onPress={handleDetailPress}>
                <Feather name="search" size={30} color={colors.Q} />
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image source={{ uri: firstItem.image }} style={styles.image} resizeMode="cover" />
                        <Text style={styles.modalText}>Modelo: {firstItem.model}</Text>
                        <Text style={styles.modalText}>Categoría: {firstItem.category}</Text>
                        <Text style={styles.modalText}>Días de alquiler: {firstItem.quantity}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default PickUpCard;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.MLG,
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
        fontSize: 17,
        color: colors.Q,
    },
    text2: {
        fontFamily: "SedanSC",
        fontSize: 19,
        color: colors.LGA,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.D,
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: colors.Q,
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 20,
    },
    modalText: {
        fontFamily: "SedanSC",
        fontSize: 18,
        color: colors.GI,
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.MLG,
        borderRadius: 5,
    },
    closeButtonText: {
        color: colors.Q,
        fontFamily: "SedanSC",
        fontSize: 16,
    }
});
