import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {baseUrl} from 'config/config'
import axios from "axios";
const initialState = {
    language: 'vn',
    width:0,
    heidth:0,
    tab:''
} 

export const devideSlice = createSlice({
    name: 'Device',
    initialState,
    reducers: {
        changeSize: (state, action) => {
            state.width= action.payload.width
            state.heidth= action.payload.heidth
        },
        changeLanguage: (state, action) => {
            state.language= action.payload
        },
        changeTab: (state, action) => {
            state.tab= action.payload
        },
    }
})
export const { changeSize,changeLanguage ,changeTab} = devideSlice.actions
export default devideSlice.reducer