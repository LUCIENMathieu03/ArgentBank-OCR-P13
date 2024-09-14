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

export type ActionType = SIGN_IN | ADD_USER_INFO | SIGN_OUT

export type ADD_USER_INFO = {
    type: 'ADD_USER_INFO'
    payload: {
        firstName: string
        lastName: string
    }
}

export type SIGN_IN = {
    type: 'SIGN_IN'
    payload: {
        email: string
        token: string
    }
}

export type SIGN_OUT = {
    type: 'SIGN_OUT'
}
