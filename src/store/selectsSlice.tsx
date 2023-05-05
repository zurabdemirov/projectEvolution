import {createSlice} from "@reduxjs/toolkit";

export const selectsSlice = createSlice({
    name: 'selectsSlice',
    initialState: {
        firstSelectId: null,
    },

    reducers: {
        firstId(items, action){
            return { ...items, firstSelectId: action.payload }
        }
    }
})

export const { firstId } = selectsSlice.actions

export default selectsSlice.reducer