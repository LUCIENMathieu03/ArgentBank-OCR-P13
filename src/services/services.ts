import { ConnexionResponseType, FetchUserProfilType } from './services.type'

export async function connexion(
    usernameInput: string,
    passwordInput: string
): Promise<ConnexionResponseType | false> {
    try {
        const res = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: usernameInput,
                password: passwordInput,
            }),
        })

        if (!res.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

export const fetchUserProfil = async (
    userToken: string
): Promise<FetchUserProfilType | false> => {
    try {
        const res = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        })

        if (!res.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await res.json()

        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

export const editName = async (
    newFirstName: string,
    newLastName: string,
    userToken: string
): Promise<boolean> => {
    try {
        const res = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
            body: JSON.stringify({
                firstName: newFirstName,
                lastName: newLastName,
            }),
        })

        if (!res.ok) {
            throw new Error('Network response was not ok')
        }
        // const data = await res.json()
        // console.log(data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}
