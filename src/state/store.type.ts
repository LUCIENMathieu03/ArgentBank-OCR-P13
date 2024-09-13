export type StateType = {
    user: {
        userName: string | undefined
        token: string | undefined
    }
    userProfil: {
        email: string | undefined
        firstName: string | undefined
        lastName: string | undefined
    }
}

export type ActionType = SIGN_IN | ADD_USER_INFO

export type ADD_USER_INFO = {
    type: 'ADD_USER_INFO'
    payload: {
        email: string
        firstName: string
        lastName: string
    }
}

export type SIGN_IN = {
    type: 'SIGN_IN'
    payload: {
        userName: string
        token: string
    }
}
