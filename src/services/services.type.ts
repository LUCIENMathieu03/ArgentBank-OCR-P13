export type ConnexionResponseType = {
    status: number
    message: string
    body: {
        token: string
    }
}

export type FetchUserProfilType = {
    status: number
    message: string
    body: {
        createdAt: string
        email: string
        firstName: string
        id: string
        lastName: string
        updatedAt: string
    }
}
