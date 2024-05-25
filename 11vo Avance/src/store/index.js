import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "../features/Reservation/reservationSlice";
import { reservationApi } from "../services/reservationService";
import { setupListeners } from "@reduxjs/toolkit/query";
import pendingReservationsSlice from "../features/PendingReservations/pendingReservationsSlice";

const store = configureStore({
    reducer: {
        reservationSlice,
        pendingReservationsSlice,
        [reservationApi.reducerPath]: reservationApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reservationApi.middleware)
})

setupListeners(store.dispatch)

export default store