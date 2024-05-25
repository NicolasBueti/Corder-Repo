import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/reservationService";
import { colors } from "../constants/colors";
import { clearUser } from "../features/User/userSlice";

const MyProfile = ({navigation}) => {

    const dispatch = useDispatch()

    const {imageCamera, localId} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId)

    const launchCamera = async () => {
        navigation.navigate('Image selector')
    };

    const signOut = async () => {
        dispatch(clearUser())
    }

    const defaultImageRoute = "../../assets/images/defaultProfile.png"

    return (
        <View style={styles.container}>
            {imageFromBase ? (
                <Image
                    source={{uri: imageFromBase?.image || imageCamera}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require(defaultImageRoute)}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title={
                imageFromBase || imageCamera
                ? "Modificar foto de perfil"
                : "Añadir foto de perfil"
                }
            />
            <AddButton onPress={signOut} title="Cerrar sesion" />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.Q
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});
