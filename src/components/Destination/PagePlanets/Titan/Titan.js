import Header from '../../../Header/Header'
import '../PagePlanet.css'
import '../PagePlanetMedia.css'
import BackgroundImage from '../../../img/destination/titan_background.jpg'




const Titan = () => {

  
    return (
        <div className="planet-page-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <Header />
            <div className='description'>
                <div className='dados-planet-page'>
                    <div className='titulo-description-planet-page'>
                        <h1 className='name-planet'>Titan</h1>
                        <p className='description-planet'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>

                        <div className='distance'>
                            <h3 className='distance-title'>DISTANCE</h3>
                            <p className='distance-subtitle'>1.6 bil. km</p>
                        </div>
                        <div className='travel'>
                            <p className='travel-subtitle'>7 years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Titan