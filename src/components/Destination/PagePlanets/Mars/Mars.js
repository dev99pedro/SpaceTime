
import Header from '../../../Header/Header'
import BackgroundImage from '../../../img/destination/mars_background.jpg'





const Mars = () => {



    return (
        <div className="planet-page-page" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <Header />
            <div className='description'>
                <div className='dados-planet-page'>
                    <div className='titulo-description-planet-page'>
                        <h1 className='name-planet'>Mars</h1>
                        <p className='description-planet'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>

                        <div className='distance'>
                            <h3 className='distance-title'>DISTANCE</h3>
                            <p className='distance-subtitle'>225 mil. km</p>
                        </div>
                        <div className='travel'>
                            <p className='travel-subtitle'>9 months</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Mars