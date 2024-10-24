import { createSlice } from '@reduxjs/toolkit'
import { connexion, editName, fetchUserProfile } from './actions/actions'

export type StateType = {
    user: {
        email: string | undefined
        token: string | undefined
    }
    userProfile: {
        firstName: string | undefined
        lastName: string | undefined
    }
}

const state: StateType = {
    user: {
        email: undefined,
        token: undefined,
    },
    userProfile: {
        firstName: undefined,
        lastName: undefined,
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: state,
    reducers: {
        logOut: (state) => {
            state.user.email = undefined
            state.user.token = undefined
            state.userProfile.firstName = undefined
            state.userProfile.lastName = undefined
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(connexion.fulfilled, (state, action) => {
                state.user.email = action.payload.email
                state.user.token = action.payload.token
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.userProfile.firstName = action.payload.firstName
                state.userProfile.lastName = action.payload.lastName
            })
            .addCase(editName.fulfilled, (state, action) => {
                state.userProfile.firstName = action.payload.newFirstName
                state.userProfile.lastName = action.payload.newLastName
            })
    },
})
