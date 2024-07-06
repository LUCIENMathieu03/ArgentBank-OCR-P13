import '../scss/components/cardFeature.scss'

type CardFeatureType = {
    img: string
    text: string
    title: string
}

export default function CardFeature({ img, text, title }: CardFeatureType) {
    return (
        <div className="cardFeature">
            <img src={img} alt="Chat Icon" className="cardFeature__icon" />
            <h3 className="cardFeature__title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}
