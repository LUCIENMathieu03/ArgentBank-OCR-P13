import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile } from '../../redux/selector.ts'
import { useState, useEffect } from 'react'
import '../../scss/pages/login.scss'
import ErrorMessage from '../../components/ErrorMessage.tsx'
import { connexion, fetchUserProfile } from '../../redux/actions/actions.ts'
import { AppDispatch } from '../../redux/store.ts'

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const userProfile = useSelector(getUserProfile)

    const [inputError, setInputError] = useState(false)

    const handleConexion = async (evt: React.MouseEvent) => {
        evt.preventDefault()

        const usernameInput = (
            document.querySelector('#username') as HTMLInputElement
        )?.value.toString()

        const passwordInput = (
            document.querySelector('#password') as HTMLInputElement
        )?.value.toString()

        //Create the connexion
        const resultConnexion = await dispatch(
            connexion({ usernameInput, passwordInput })
        )
        if (connexion.fulfilled.match(resultConnexion)) {
            setInputError(false)

            //Fetch user informations
            await dispatch(
                fetchUserProfile({ token: resultConnexion.payload.token })
            )

            navigate('/profile')
        } else {
            console.log(resultConnexion)
            setInputError(true)
        }
    }

    useEffect(() => {
        if (userProfile.firstName && userProfile.lastName) {
            navigate('/profile')
        }
    })

    return (
        <main className="main bg-dark loginContainer">
            <section className="loginContainer__content">
                <i className="fa fa-user-circle  loginContainer__content__icon"></i>
                <h1>Sign In</h1>
                <ErrorMessage
                    message="The username or the password is incorrect"
                    inputError={inputError}
                />
                <form>
                    <div className="loginContainer__content__form__input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="loginContainer__content__form__input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="loginContainer__content__form__input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button
                        className="loginContainer__content__form__button"
                        onClick={(evt) => handleConexion(evt)}
                    >
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}
