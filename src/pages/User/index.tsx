import '../../scss/pages/user.scss'
import AccountCard from '../../components/AccountCard'

export default function User() {
    return (
        <main className="main bg-dark">
            <div className="header-user">
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis!
                </h1>
                <button className="header-user__edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountCard
                title="Argent Bank Checking (x8349)"
                amount={2082.79}
                description="Available Balance"
            />
            <AccountCard
                title="Argent Bank Savings (x6712)"
                amount={10928.42}
                description="Available Balance"
            />
            <AccountCard
                title="Argent Bank Credit Card (x8349)"
                amount={184.3}
                description="Current Balance"
            />
        </main>
    )
}
