import '../../scss/pages/signIn.scss'
import { useNavigate } from 'react-router-dom'
import { useStore } from 'react-redux'

export default function SignIn() {
    const navigate = useNavigate()
    const store = useStore()

    const handleConexion = async (evt: React.MouseEvent) => {
        evt.preventDefault()

        const usernameInput = (
            document.querySelector('#username') as HTMLInputElement
        )?.value.toString()

        const passwordInput = (
            document.querySelector('#password') as HTMLInputElement
        )?.value.toString()

        console.log(usernameInput)
        console.log(passwordInput)

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
            const signInPayload = {
                userName: usernameInput,
                token: data.body.token,
            }

            console.log(data)

            store.dispatch({ type: 'SIGN_IN', payload: signInPayload })

            navigate('/user')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="main bg-dark signInContainer">
            <section className="signInContainer__content">
                <i className="fa fa-user-circle  signInContainer__content__icon"></i>
                <h1>Sign In</h1>
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
