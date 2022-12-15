import { Link, } from "react-router-dom";
import './CardsItem.css'




const CardsItem = ({ titleColor, title, photo, description, path, width, minHeight, maxHeight, alignText, paddingTop, widthImg, background, webShadow, boxShadow }) => {


    return (

        <div className="card-box" style={{ width: width, minHeight: minHeight, maxHeight: maxHeight, background: background, WebkitBoxShadow: webShadow, boxShadow: boxShadow }}>
            <div>
                <Link className="link-card-box" to={path}>
                    <div className='card-img'>
                        <img src={photo} style={{ width: widthImg }} />
                    </div>
                    <div className='card-text'>
                        <h1 className="card-text-title" style={{ color: titleColor }}>{title}</h1>
                        <p style={{ textAlign: alignText, paddingTop: paddingTop }} className="card-text-description">{description}</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}


export default CardsItem