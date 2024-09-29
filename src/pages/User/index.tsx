import '../../scss/pages/user.scss'
import AccountCard from '../../components/AccountCard'
import { useSelector, useStore } from 'react-redux'
import { getUser, getUserProfile } from '../../state/selector'
import { useEffect, useState } from 'react'
import ErrorMessage from '../../components/ErrorMessage'

export default function User() {
    const store = useStore()
    const userProfile = useSelector(getUserProfile)
    const userToken = useSelector(getUser).token

    const [userEditing, setUserEditing] = useState(false)
    const [inputError, setInputError] = useState(false)
    const [firstNameInput, setFirstNameInputValue] = useState('')
    const [lastNameInput, setLastNameInputValue] = useState('')

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

    const handleEditName = async () => {
        setUserEditing(true)
    }

    const handleCancel = (e: React.MouseEvent) => {
        e.preventDefault()
        setUserEditing(false)
    }

    const handleSaveNewName = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const newFirstName = (
            form.elements.namedItem('firstname') as HTMLInputElement
        ).value
        const newLastName = (
            form.elements.namedItem('lastname') as HTMLInputElement
        ).value

        if (newFirstName.length !== 0 && newLastName.length !== 0) {
            setInputError(false)
            try {
                const res = await fetch(
                    'http://localhost:3001/api/v1/user/profile',
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${userToken}`,
                        },
                        body: JSON.stringify({
                            firstName: newFirstName,
                            lastName: newLastName,
                        }),
                    }
                )

                if (!res.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await res.json()
                console.log(data)

                const newUserName = {
                    firstName: newFirstName,
                    lastName: newLastName,
                }

                store.dispatch({ type: 'ADD_USER_INFO', payload: newUserName })
            } catch (error) {
                console.log(error)
            }
            setUserEditing(false)
        } else {
            setInputError(true)
        }
    }

    useEffect(() => {
        if (userToken?.length !== 0) {
            fetchUserProfil()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //to fill edit's inputs at initialization
    useEffect(() => {
        if (userProfile.firstName && userProfile.lastName) {
            setFirstNameInputValue(userProfile.firstName)
            setLastNameInputValue(userProfile.lastName)
        }
    }, [userProfile])

    return (
        <main className="main bg-dark">
            <div className="header-user">
                <h1>
                    Welcome back
                    <br />
                    {userEditing ? (
                        <>
                            <ErrorMessage
                                message=" Please fill all fields"
                                inputError={inputError}
                            />
                            <form onSubmit={(e) => handleSaveNewName(e)}>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="Firstname"
                                    value={firstNameInput}
                                    onInput={(e) =>
                                        setFirstNameInputValue(
                                            e.currentTarget.value
                                        )
                                    }
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Lastname"
                                    value={lastNameInput}
                                    onInput={(e) =>
                                        setLastNameInputValue(
                                            e.currentTarget.value
                                        )
                                    }
                                />
                                <br />
                                <button className="header-user__edit-button">
                                    Save
                                </button>
                                <button
                                    className="header-user__edit-button"
                                    onClick={(e) => handleCancel(e)}
                                >
                                    Cancel
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            {`${userProfile.firstName} ${userProfile.lastName}`}
                            <br />
                            <button
                                className="header-user__edit-button"
                                onClick={handleEditName}
                            >
                                Edit Name
                            </button>
                        </>
                    )}
                </h1>
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
