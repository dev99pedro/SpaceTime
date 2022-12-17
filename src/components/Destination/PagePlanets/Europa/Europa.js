
import Header from '../../../Header/Header'
import '../PagePlanet.css'
import '../PagePlanetMedia.css'
import BackgroundImage from '../../../img/destination/europa_background.jpg'




const Europa = () => {


    return (
        <div className="planet-page-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <Header />
            <div className='description'>
                <div className='dados-planet-page'>
                    <div className='titulo-description-planet-page'>
                        <h1 className='name-planet'>Europa</h1>
                        <p className='description-planet'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>

                        <div className='distance'>
                            <h3 className='distance-title'>DISTANCE</h3>
                            <p className='distance-subtitle'>628 mil. km</p>
                        </div>
                        <div className='travel'>
                            <p className='travel-subtitle'>3 years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Europa