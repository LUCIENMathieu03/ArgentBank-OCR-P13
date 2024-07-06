import { Link } from 'react-router-dom'
import '../scss/layouts/header.scss'
import argentBankLogo from '../assets/img/argentBankLogo.png'

export default function Header() {
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
                <Link className="header__link header__linkItem" to="/signIn">
                    <i className="fa fa-user-circle"></i>
                    {` Sign In`}
                </Link>
            </div>
        </nav>
    )
}
