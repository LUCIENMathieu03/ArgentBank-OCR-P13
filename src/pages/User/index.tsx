import '../../scss/pages/user.scss'
import AccountCard from '../../components/AccountCard'
import { useSelector, useStore } from 'react-redux'
import { getUser, getUserProfile } from '../../state/selector'
import { useEffect } from 'react'

export default function User() {
    const store = useStore()
    const userProfile = useSelector(getUserProfile)
    const userToken = useSelector(getUser).token

    const fetchUserProfil = async () => {
        try {
            const res = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${userToken}`,
                    },
                }
            )

            if (!res.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await res.json()
            console.log(data)

            const userInfo = {
                email: data.body.email,
                firstName: data.body.firstName,
                lastName: data.body.lastName,
            }

            store.dispatch({ type: 'ADD_USER_INFO', payload: userInfo })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (userToken?.length !== 0) {
            fetchUserProfil()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className="main bg-dark">
            <div className="header-user">
                <h1>
                    Welcome back
                    <br />
                    {`${userProfile.firstName} ${userProfile.lastName}`}
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
