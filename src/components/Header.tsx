import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../scss/layouts/header.scss'
import argentBankLogo from '../assets/img/argentBankLogo.png'
import { getUser, getUserProfile } from '../redux/selector'
import { AppDispatch } from '../redux/store'
import { authSlice } from '../redux/reducer'

export default function Header() {
    const isUserLogin = !!useSelector(getUser).token
    const userInfo = useSelector(getUserProfile)
    const dispatch = useDispatch<AppDispatch>()

    const handleSignOut = () => {
        dispatch(authSlice.actions.logOut())
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
            <div className="header__items">
                {isUserLogin ? (
                    <>
                        <Link
                            className="header__link header__linkItem"
                            to="/Profile"
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
                    <Link className="header__link header__linkItem" to="/login">
                        <i className="fa fa-user-circle"></i>
                        {` Sign In`}
                    </Link>
                )}
            </div>
        </nav>
    )
}
