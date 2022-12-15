import { Link } from "react-router-dom"
import './CardsPlanetPopUp.css'

import './CardsPlanetPopUp.css'
const MoonCard = ({title, subtitle, span, img, link}) => {
    return (
        <div className="planet-card">
            <img src={img} height="auto" />
            <div className="planet-card-text">
                <h1>{title}</h1>
                <p className="planet-card-text-description">{subtitle}</p>
            </div>

            <button class="btn">
                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                </svg>
                <Link to={link} className="link-botao">
                    <span>{span}</span>
                </Link>
            </button>


        </div>
    )
}

export default MoonCard