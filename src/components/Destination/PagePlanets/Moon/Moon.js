import { useEffect, useState } from 'react'
import Header from '../../../Header/Header'
import '../PagePlanet.css'
import '../PagePlanetMedia.css'




const Moon = () => {

    

    return (
        <div className="planet-page-page">
            <Header />
            <div className='description'>
                <div className='dados-planet-page'>
                    <div className='titulo-description-planet-page'>
                        <h1 className='name-planet'>Moon</h1>
                        <p className='description-planet'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

                        <div className='distance'>
                            <h3 className='distance-title'>DISTANCE</h3>
                            <p className='distance-subtitle'>384,400 km</p>
                        </div>
                        <div className='travel'>
                            <p className='travel-subtitle'>3 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Moon