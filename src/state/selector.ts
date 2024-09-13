import { StateType } from './store.type'

export const getUser = (state: StateType) => {
    return state.user
}

export const getUserProfil = (state: StateType) => {
    return state.userProfil
}
