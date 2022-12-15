import './TechnologyItems.css'
import { Link } from 'react-router-dom'



const TechnologyItems = ({ title, urlImage, marginTop }) => {

    return (
        <div className="card-tec">
            <div className='img-text-tec' style={{ backgroundImage: `url(${urlImage})`, marginTop: marginTop }}>
                <img className="img-tec" />

            </div>
            <div className='flex-btn-crew'>
                <div className="btn-div-tec">
                    <Link to="/tecnhology">
                        <button class="button-64" role="button"><span class="text">Go to page</span></button>
                    </Link>
                </div>
                <div className='title-tec'>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default TechnologyItems