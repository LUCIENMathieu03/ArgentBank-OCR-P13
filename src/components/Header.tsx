import { Link } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
import '../scss/layouts/header.scss'
import argentBankLogo from '../assets/img/argentBankLogo.png'
import { getUser, getUserProfile } from '../state/selector'

export default function Header() {
    const store = useStore()
    const isUserSignin = !!useSelector(getUser).token
    const userInfo = useSelector(getUserProfile)

    const handleSignOut = () => {
        store.dispatch({ type: 'SIGN_OUT' })
    }

    return (
        <nav className="header">
            <Link className="header__link header__logo" to="/">
                <img
                    className="header__logo__image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isUserSignin ? (
                    <>
                        <Link
                            className="header__link header__linkItem"
                            to="/User"
                        >
                            <i className="fa fa-user-circle"></i>
                            {` ${userInfo.firstName} `}
                        </Link>

                        <Link
                            className="header__link header__linkItem"
                            to="/"
                            onClick={handleSignOut}
                        >
                            <i className="fa fa-sign-out"></i>
                            {` Sign Out`}
                        </Link>
                    </>
                ) : (
                    <Link
                        className="header__link header__linkItem"
                        to="/signIn"
                    >
                        <i className="fa fa-user-circle"></i>
                        {` Sign In`}
                    </Link>
                )}
            </div>
        </nav>
    )
}
