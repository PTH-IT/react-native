import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {baseUrl} from 'config/config'
import axios from "axios";
import {LoginAPI,RegisterAPI ,LogoutAPI} from 'API/account'
const initialState = {
    login: {
        UserName: '',
        PassWord: '',
        api:{
            pending: false,
            response: null,
            error: null,
            statuscode: null,
          }
    }, 
    register:{
        Name: '', 
        UserName: '',
        Email: '',
        PassWord: '',
        ConfirmPassWord: '',
        api:{
            pending: false,
            response: null,
            error: null,
            statuscode: null,
          }
    },
    token:{
        token:'',
        tokentype:'',
        api:{
            pending: false,
            response: null,
            error: null,
            statuscode: null,
          }
    },
    logout: {
      UserName: '',
      PassWord: '',
      api:{
          pending: false,
          response: null,
          error: null,
          statuscode: null,
        }
  }, 
};


export const loginTaskAsync = createAsyncThunk(
    'Account/apilogin',
    async (user,{ rejectWithValue }) => {
      try {
        var {UserName, PassWord} =user
      const response = await LoginAPI(UserName, PassWord)
        return JSON.parse(response)
      }
      catch (err) {
        let error = err // cast the error for access
        if (!error.response) {
          throw err
        }
        return rejectWithValue( error.response)
      }
    }
    
  );

  export const registerTaskAsync = createAsyncThunk(
    'Account/apiregister',
    async (user,{ rejectWithValue }) => {
      try {
        var {UserName, PassWord ,Email} =user
      const response = await RegisterAPI(UserName, PassWord,Email)
        return JSON.parse(response)
      }
      catch (err) {
        let error = err // cast the error for access
        if (!error.response) {
          throw err
        }
        return rejectWithValue( error.response)
      }
    }
    
  );


  
  export const logoutTaskAsync = createAsyncThunk(
    'Account/apilogout',
    async (Authorization,{ rejectWithValue }) => {
      try {
      const response = await LogoutAPI(Authorization)
        return JSON.parse(response)
      }
      catch (err) {
        let error = err // cast the error for access
        if (!error.response) {
          throw err
        }
        return rejectWithValue( error.response)
      }
    }
    
  );

export const accountSlice = createSlice({
    name: 'Account',
    initialState,
    reducers: {
        changelogin: (state, action) => {
            state.login.UserName= action.payload.UserName
            state.login.PassWord= action.payload.PassWord

        },
        changeregister: (state, action) => {
            state.register.Name= action.payload.Name
            state.register.UserName= action.payload.UserName
            state.register.Email= action.payload.Email
            state.register.PassWord= action.payload.PassWord
            state.register.ConfirmPassWord= action.payload.ConfirmPassWord
        },
        changetoken: (state, action) => {
            state.token.token= action.payload.token
            state.token.tokentype= action.payload.tokentype
        },
        changelogout: (state, action) => {
          state.login =initialState.login
          state.register =initialState.register
          state.token =initialState.token
        }

    },
    extraReducers: (builder) => {
        //login api
      builder.addCase(loginTaskAsync.pending, (state) => {
        state.login.api.pending = true;
      })
      builder.addCase(loginTaskAsync.fulfilled, (state, action) => {
        state.login.api.pending = false
        state.login.api.response = action.payload.data
        state.login.api.error = null
        state.login.api.statuscode = action.payload.status
      })
      builder.addCase(loginTaskAsync.rejected, (state, action) => {
        state.login.api.pending = false
        state.login.api.response = null
        state.login.api.error = action.payload.data
        state.login.api.statuscode = action.payload.status
      })
//register api
      builder.addCase(registerTaskAsync.pending, (state) => {
        state.register.api.pending = true;
      })
      builder.addCase(registerTaskAsync.fulfilled, (state, action) => {
        state.register.api.pending = false
        state.register.api.response = action.payload.data
        state.register.api.error = null
        state.register.api.statuscode = action.payload.status
      })
      builder.addCase(registerTaskAsync.rejected, (state, action) => {
        state.register.api.pending = false
        state.register.api.response = null
        state.register.api.error = action.payload.data
        state.register.api.statuscode = action.payload.status
      })
      //logout api
      builder.addCase(loginTaskAsync.pending, (state) => {
        state.logout.api.pending = true;
      })
      builder.addCase(loginTaskAsync.fulfilled, (state, action) => {
        state.logout.api.pending = false
        state.logout.api.response = action.payload.data
        state.logout.api.error = null
        state.logout.api.statuscode = action.payload.status
      })
      builder.addCase(loginTaskAsync.rejected, (state, action) => {
        state.logout.api.pending = false
        state.logout.api.response = null
        state.logout.api.error = action.payload.data
        state.logout.api.statuscode = action.payload.status
      });
       }
    });


export const { changelogin ,changeregister,changetoken } = accountSlice.actions;


export default accountSlice.reducer;