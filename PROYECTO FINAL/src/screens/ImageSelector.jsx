import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/User/userSlice";
import AddButton from "../components/AddButton";
import { colors } from "../constants/colors";
import { usePostProfileImageMutation, useGetProfileImageQuery } from "../services/reservationService";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const {localId} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId)
    const [triggerPostImage, result] = usePostProfileImageMutation()

    const dispatch = useDispatch()

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        return granted
    }
    const verifyGalleryPermissions = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        return granted
    }
    const pickLibraryImage = async () => {
        try {
            const permissionGallery = await verifyGalleryPermissions()
            if (permissionGallery) {
                const result = await ImagePicker.launchImageLibraryAsync({
                    base64: true,
                    allowsEditing: true,
                    aspect: [1,1],
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.2,

                })
                if (!result.canceled){
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }
        } catch (error) {

        }
    }
    const pickImage = async () => {

        try {
            const permissionCamera = await verifyCameraPermissions()
            
            if (permissionCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2    
                })
                if (!result.canceled){
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }
            
        } catch (error) {
        }
    };
    
    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image))
            triggerPostImage({image, localId})
            navigation.goBack()
        } catch (error) {
        }
    };

    return (
        <View style={styles.container}>
            {image || imageFromBase ? (
                <> 
                    <Image source={{ uri: image || imageFromBase?.image }} style={styles.image} />
                    <AddButton title="Tomar otra foto" onPress={pickImage} />
                    <AddButton title="Elegir una foto de la galeria" onPress={pickLibraryImage} />
                    <AddButton title="Establecer foto" onPress={confirmImage} />
                    <AddButton title="Volver" onPress={() => navigation.goBack()} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>Sin imagen para mostrar</Text>
                    </View>
                    <AddButton title="Tomar una foto" onPress={pickImage} />
                    <AddButton title="Volver" onPress={() => navigation.goBack()} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        backgroundColor: colors.Q,
    },
    image: {
        marginTop: 20,
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.MLG,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
