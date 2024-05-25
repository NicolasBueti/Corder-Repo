import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
    name: "reservation",
    initialState: {
        value: {
            categorySelected: "",
            itemIdSelected: "",
        }
    },
    reducers: {
        setCategorySelected : (state, action) => {
            state.value.categorySelected = action.payload
        },
        setIdSelected : (state, {payload}) => {
            state.value.itemIdSelected = payload
        }
    }
})

export const {setCategorySelected, setIdSelected} = reservationSlice.actions

export default reservationSlice.reducer