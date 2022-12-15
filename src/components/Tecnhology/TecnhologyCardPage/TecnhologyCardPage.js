
import './TecnhologyCardPage.css'

const TecnhologyCardPage = ({img, subtitle, title, handleClick, id}) => {
    return (
        <div className="card-tec-page" id={id} onClick={handleClick}>
            <div>
                <img className="img-card-tec-page" src={img}></img>
            </div>
            <div className="text-card-tec-page">
                <p>{subtitle}</p>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default TecnhologyCardPage

