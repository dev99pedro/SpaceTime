import TechnologyItems from "./TecnhologyItems.js/TecnhologyItems"
import './Technology.css'
import IMAGES from '../ImagesExport/index'
import './TecnhologyMedia.css'







const Technology = () => {


    return (
        <div className="tec">
            <h1 className="tec-main-title">Our technologies</h1>
            <div className="cards-tec">
                <TechnologyItems title='Launch vehicle' urlImage={IMAGES.Launch} />
                <TechnologyItems title='Space capsule' urlImage={IMAGES.Capsule} marginTop="300px" />
            </div>
            <div className="card-tec-space-port">
                <TechnologyItems title='Spaceport' urlImage={IMAGES.SpacePort} />
            </div>
        </div>
    )
}

export default Technology