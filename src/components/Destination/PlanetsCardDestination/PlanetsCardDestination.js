
import './PlanetsCardDestination.css'

const PlanetsCardDestination = ({changeSizePlanet,title, photo, handleClick, handleSizePlanet,minHeight }) => {


    



    return (
        <div onClick={changeSizePlanet}>
            <div onClick={handleClick} style={{minHeight: minHeight }} className='planets-cards-destination-box'>
                <div className='card-img' >
                    <img className={handleSizePlanet} src={photo} />
                </div>
                <div className='card-text'>
                    <h1 className="card-text-title">{title}</h1>
                </div>
            </div>
        </div>

    )
}

export default PlanetsCardDestination