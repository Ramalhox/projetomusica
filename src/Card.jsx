function Card(props) {
    return (
        <>
        <div className="card">
            <div className="card2">
            <p>{props.texto}</p>
            </div>
        </div>
        </>
    )
}

function CardOutro() {
    return (
        <>
            Isso é um card
        </>
    )
}

export default Card;