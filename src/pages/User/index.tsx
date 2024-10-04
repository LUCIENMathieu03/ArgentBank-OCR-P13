import { useSelector, useStore } from 'react-redux'
import { getUser, getUserProfile } from '../../state/selector'
import { useEffect, useState } from 'react'
import '../../scss/pages/user.scss'
import AccountCard from '../../components/AccountCard'
import ErrorMessage from '../../components/ErrorMessage'
import { editName } from '../../services/services'

export default function User() {
    const store = useStore()
    const userProfile = useSelector(getUserProfile)
    const userToken = useSelector(getUser).token

    const [isUser, setIsUser] = useState({ editing: false, inputError: false })
    const [inputValue, setInputValue] = useState({
        firstName: '',
        lastName: '',
    })

    const handleEditName = async () => {
        setIsUser({ ...isUser, editing: true })
    }

    const handleCancel = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsUser({ ...isUser, editing: false })
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

        if (
            newFirstName.length !== 0 &&
            newLastName.length !== 0 &&
            userToken
        ) {
            //Edit user information
            const nameEddited = await editName(
                newFirstName,
                newLastName,
                userToken
            )
            if (nameEddited) {
                const newUserName = {
                    firstName: newFirstName,
                    lastName: newLastName,
                }

                store.dispatch({ type: 'ADD_USER_INFO', payload: newUserName })

                setIsUser({ editing: false, inputError: false })
            }
        } else {
            setIsUser({ ...isUser, inputError: true })
        }
    }

    //fill edit's inputs at initialization
    useEffect(() => {
        if (userProfile.firstName && userProfile.lastName) {
            setInputValue({
                firstName: userProfile.firstName,
                lastName: userProfile.lastName,
            })
        }
    }, [userProfile])

    return (
        <main className="main bg-dark">
            <div className="header-user">
                <h1>
                    Welcome back
                    <br />
                    {isUser.editing ? (
                        <>
                            <ErrorMessage
                                message=" Please fill all fields"
                                inputError={isUser.inputError}
                            />
                            <form onSubmit={(e) => handleSaveNewName(e)}>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="Firstname"
                                    value={inputValue.firstName}
                                    onInput={(e) =>
                                        setInputValue({
                                            ...inputValue,
                                            firstName: e.currentTarget.value,
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Lastname"
                                    value={inputValue.lastName}
                                    onInput={(e) =>
                                        setInputValue({
                                            ...inputValue,
                                            lastName: e.currentTarget.value,
                                        })
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
