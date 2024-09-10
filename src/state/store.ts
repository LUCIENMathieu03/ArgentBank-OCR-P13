import { configureStore } from '@reduxjs/toolkit'
import { Reducer } from 'redux'
import { StateType, ActionType } from './store.type'

const state: StateType = {
    user: {
        username: '',
        token: '',
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
        default:
            return currentState
    }
}

export const store = configureStore({
    preloadedState: state,
    reducer,
})
