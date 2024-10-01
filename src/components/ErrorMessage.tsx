import '../scss/components/errorMessage.scss'

type ErrorMessageType = {
    message: string
    inputError: boolean
}

export default function ErrorMessage({
    message,
    inputError,
}: ErrorMessageType) {
    return <>{inputError && <div className="errorMessage">{message}</div>}</>
}
