import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice"
import reductorDelShop from "../features/Reservation/reservationSlice"
import reservationSlice from "../features/Reservation/reservationSlice";

export default configureStore({
    reducer: {
        reservationSlice
    }
})