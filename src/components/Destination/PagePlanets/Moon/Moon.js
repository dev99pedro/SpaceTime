import { useEffect, useState } from 'react'
import Header from '../../../Header/Header'
import '../PagePlanet.css'
import '../PagePlanetMedia.css'




const Moon = () => {

    const [showApi, setShowApi] = useState([])

    useEffect(() => {
        async function getApi() {
            const response = await fetch('http://localhost:3000/destinations')
            const data = await response.json()
            setShowApi(data)

        }
        getApi()
    }, [])

    return (
        <div className="planet-page-page">
            <Header />
            <div className='description'>
                {showApi.filter(element => element.name === 'Moon').map((element, index) => {
                    return (
                        <div className='dados-planet-page' key={index}>
                            <div className='titulo-description-planet-page'>
                                <h1 className='name-planet'>{element.name}</h1>
                                <p className='description-planet'>{element.description}</p>
                         
                                <div className='distance'>
                                    <h3 className='distance-title'>DISTANCE</h3>
                                    <p className='distance-subtitle'>{element.distance}</p>
                                </div>
                                <div className='travel'>
                                    <p className='travel-subtitle'>{element.travel}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export default Moon