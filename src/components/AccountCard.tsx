import '../scss/components/accountCard.scss'

type AmountCardType = {
    title: string
    amount: number
    description: string
}
export default function AccountCard({
    title,
    amount,
    description,
}: AmountCardType) {
    return (
        <section className="account">
            <div className="account__content">
                <h3 className="account__content__title">{title}</h3>
                <p className=" account__content__amount">
                    ${amount.toLocaleString('en-US')}
                </p>
                <p className=" account__content__description">{description}</p>
            </div>
            <div className="cta account__content">
                <button className="account__content__transaction-button">
                    View transactions
                </button>
            </div>
        </section>
    )
}
