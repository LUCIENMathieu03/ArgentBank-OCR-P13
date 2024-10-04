import { useNavigate } from 'react-router-dom'
import { useStore } from 'react-redux'
import { useState } from 'react'
import '../../scss/pages/signIn.scss'
import ErrorMessage from '../../components/ErrorMessage'
import { connexion, fetchUserProfil } from '../../services/services.ts'

export default function SignIn() {
    const navigate = useNavigate()
    const store = useStore()
    const [inputError, setInputError] = useState(false)

    const handleConexion = async (evt: React.MouseEvent) => {
        evt.preventDefault()

        const usernameInput = (
            document.querySelector('#username') as HTMLInputElement
        )?.value.toString()

        const passwordInput = (
            document.querySelector('#password') as HTMLInputElement
        )?.value.toString()

        //create the connection
        const connexionData = await connexion(usernameInput, passwordInput)
        if (connexionData) {
            const signInPayload = {
                userName: usernameInput,
                token: connexionData.body.token,
            }
            store.dispatch({ type: 'SIGN_IN', payload: signInPayload })
            setInputError(false)

            //fetch user information
            const fetchUserData = await fetchUserProfil(
                connexionData.body.token
            )
            if (fetchUserData) {
                const userInfo = {
                    email: fetchUserData.body.email,
                    firstName: fetchUserData.body.firstName,
                    lastName: fetchUserData.body.lastName,
                }

                store.dispatch({ type: 'ADD_USER_INFO', payload: userInfo })
            }

            navigate('/user')
        } else {
            setInputError(true)
        }
    }

    return (
        <main className="main bg-dark signInContainer">
            <section className="signInContainer__content">
                <i className="fa fa-user-circle  signInContainer__content__icon"></i>
                <h1>Sign In</h1>
                <ErrorMessage
                    message="The username or the password is incorrect"
                    inputError={inputError}
                />
                <form>
                    <div className="signInContainer__content__form__input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="signInContainer__content__form__input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="signInContainer__content__form__input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button
                        className="signInContainer__content__form__button"
                        onClick={(evt) => handleConexion(evt)}
                    >
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}
