import '../../scss/pages/signIn.scss'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate()

    const handleConexion = (evt: React.MouseEvent) => {
        evt.preventDefault()
        console.log(evt)
        navigate('/user')
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
