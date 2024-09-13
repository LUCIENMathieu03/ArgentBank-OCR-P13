import { StateType } from './store.type'

export const getUser = (state: StateType) => {
    return state.user
}

export const getUserProfile = (state: StateType) => {
    return state.userProfile
}
