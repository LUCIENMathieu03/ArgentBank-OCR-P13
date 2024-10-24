import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    connexionApi,
    editNameApi,
    fetchUserProfileApi,
} from '../../services/services'
import {
    ConnexionType,
    EditNamePayload,
    EditNameType,
    FetchUserPayload,
    LoginPayload,
} from './actions.types'

export const connexion = createAsyncThunk<LoginPayload, ConnexionType>(
    'auth/connexion',
    async ({ usernameInput, passwordInput }) => {
        const response = await connexionApi(usernameInput, passwordInput)

        if (!response) {
            throw new Error('Invalid credentials')
        }
        const loginPayload = {
            email: usernameInput,
            token: response.body.token,
        }
        return loginPayload
    }
)

export const fetchUserProfile = createAsyncThunk<
    FetchUserPayload,
    { token: string }
>('auth/fechtUserProfile', async ({ token }) => {
    const response = await fetchUserProfileApi(token)

    if (!response) {
        throw new Error('Invalid credentials')
    }
    const userInfo = {
        firstName: response.body.firstName,
        lastName: response.body.lastName,
    }

    return userInfo
})

export const editName = createAsyncThunk<EditNamePayload, EditNameType>(
    'auth/editName',
    async ({ newFirstName, newLastName, token }) => {
        const response = await editNameApi(newFirstName, newLastName, token)

        if (!response) {
            throw new Error('Invalid credentials')
        }

        const newUserName = {
            newFirstName: newFirstName,
            newLastName: newLastName,
        }

        return newUserName
    }
)
