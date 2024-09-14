import '../../scss/pages/home.scss'
import CardFeature from '../../components/CardFeature'

import chatIcon from '../../assets/img/icon-chat.png'
import moneyIcon from '../../assets/img/icon-money.png'
import securityIcon from '../../assets/img/icon-security.png'

export default function Home() {
    return (
        <main>
            <div className="hero">
                <section className="hero__content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="hero__content__subtitle">No fees.</p>
                    <p className="hero__content__subtitle">
                        No minimum deposit.
                    </p>
                    <p className="hero__content__subtitle">
                        High interest rates.
                    </p>
                    <p className="hero__content__text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <CardFeature
                    img={chatIcon}
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in
                            touch through our 24/7 chat or through a phone call
                            in less than 5 minutes."
                />
                <CardFeature
                    img={moneyIcon}
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest
                            rate will be!"
                />
                <CardFeature
                    img={securityIcon}
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your
                            data and money is always safe."
                />
            </section>
        </main>
    )
}
