import { configureStore } from '@reduxjs/toolkit'
import { Reducer } from 'redux'
import { StateType, ActionType } from './store.type'

const state: StateType = {
    user: {
        userName: undefined,
        token: undefined,
    },
    userProfile: {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
    },
}

const reducer: Reducer<StateType, ActionType> = (
    currentState = state,
    action
) => {
    switch (action.type) {
        case 'SIGN_IN': {
            const userLogged = action.payload
            return { ...currentState, user: userLogged }
        }
        case 'ADD_USER_INFO': {
            const userProfileInfo = action.payload
            return { ...currentState, userProfile: userProfileInfo }
        }
        case 'SIGN_OUT': {
            return {
                ...currentState,
                user: {
                    userName: undefined,
                    token: undefined,
                },
                userProfile: {
                    email: undefined,
                    firstName: undefined,
                    lastName: undefined,
                },
            }
        }
        default:
            return currentState
    }
}

export const store = configureStore({
    preloadedState: state,
    reducer,
})
