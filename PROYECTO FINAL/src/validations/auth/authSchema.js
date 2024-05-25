import { object, string, ref } from "yup"
export const signupSchema = object().shape({
    email: string().required("El email es necesario").email("email no valido"),
    password: string()
        .required("La contraseña es necesaria")
        .min(6, "La contraseña debe tener por lo menos 6 caracteres"),
    confirmPassword: string()
        .oneOf([ref("password"), null], "Las contraseñas deben coincidir")
        .required(),
})
