import { createSlice } from "@reduxjs/toolkit"

export const pendingReservationsSlice = createSlice({
    name: "PendingReservations",
    initialState: {
        value: {
            user: "userIdLogged",
            updatedAt: new Date().toLocaleString(),
            total: null,
            items: [],
        },
    },
    reducers: {
        addReservation: (state, { payload }) => {
            const reservationRepeated = state.value.items.find(
                (item) => item.id === payload.id
            )
            if (reservationRepeated) {
                const itemsUpdated = state.value.items.map((item) => {
                    if (item.id === payload.id) {
                        item.quantity += payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdated.reduce(
                    (acc, currentItem) =>
                        (acc += currentItem.daily_rental_price * currentItem.quantity),
                    0
                )
                state.value = {
                    ...state.value,
                    items: itemsUpdated,
                    total,
                    updatedAt: new Date().toLocaleString(),
                }
            } else {
                state.value.items.push(payload)
                const total = state.value.items.reduce(
                    (acc, currentItem) =>
                        (acc += currentItem.daily_rental_price * currentItem.quantity),
                    0
                )
                state.value = {
                    ...state.value,
                    total,
                    updatedAt: new Date().toLocaleString(),
                }
            }
        },
        removeReservation: (state, { payload }) => {
            const itemsUpdated = state.value.items.filter(item => item.id !== payload);
            const total = itemsUpdated.reduce(
                (acc, currentItem) =>
                    (acc += currentItem.daily_rental_price * currentItem.quantity),
                0
            )
            state.value = {
                ...state.value,
                items: itemsUpdated,
                total,
                updatedAt: new Date().toLocaleString(),
            }
        },
        clearReservations: (state) => {
            state.value.items = []
            state.value.total = 0
            state.value.updatedAt = new Date().toLocaleString()
        },
    },
})

export const { addReservation, removeReservation, clearReservations } = pendingReservationsSlice.actions
export default pendingReservationsSlice.reducer
