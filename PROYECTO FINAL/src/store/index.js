import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "../features/Reservation/reservationSlice";
import { reservationApi } from "../services/reservationService";
import { setupListeners } from "@reduxjs/toolkit/query";
import pendingReservationsSlice from "../features/PendingReservations/pendingReservationsSlice";
import authReducer from "../features/User/userSlice";
import { authApi } from "../services/authService"

const store = configureStore({
    reducer: {
        reservationSlice,
        pendingReservationsSlice,
        auth: authReducer,
        [reservationApi.reducerPath]: reservationApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
    .concat(reservationApi.middleware)
    .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store