import { RootState } from './store'

export const getUser = (state: RootState) => {
    return state.auth.user
}

export const getUserProfile = (state: RootState) => {
    return state.auth.userProfile
}
