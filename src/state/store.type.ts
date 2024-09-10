export type StateType = {
    user: {
        username: string
        token: string
    }
}

export type ActionType = {
    type: string
    payload: {
        username: string
        token: string
    }
}
