export type ConnexionType = {
    usernameInput: string
    passwordInput: string
}

export type LoginPayload = {
    email: string
    token: string
}

export type FetchUserPayload = {
    firstName: string
    lastName: string
}

export type EditNameType = {
    newFirstName: string
    newLastName: string
    token: string
}

export type EditNamePayload = {
    newFirstName: string
    newLastName: string
}
