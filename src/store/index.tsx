import {configureStore} from "@reduxjs/toolkit";
import selectsReducer from './selectsSlice'

const store = configureStore({
    reducer: {
        selectsReducer
    }
})

export default store;