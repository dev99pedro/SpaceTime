import Header from "../../Header/Header"
import Video from '../../videos/background-tec.mp4'
import TecnhologyCardPage from "../TecnhologyCardPage/TecnhologyCardPage"
import React from "react"
import { useState} from "react"
import './TecnhologyPage.css'
import './TecnhologyPageMedia.css'
import { DataBase } from '../../../Json/dataBase';
import IMAGES from "../../ImagesExport"

const TecnhologyPage = () => {



    const api = DataBase.map(element => element.technology)
    const [banner, setBanner] = useState(0)

    function handleClick(index) {
        if (index.currentTarget.id === '0') {
            setBanner(0)
        }
        if (index.currentTarget.id === '1') {
            setBanner(1)
        }
        if (index.currentTarget.id === '2') {
            setBanner(2)
        }

    }




    return (
        <div className="tec-page">
            <video autoPlay loop muted src={Video} />
            <Header />

            <div className="tec-page-cards ">
                {banner === 0 ? api.map(element => {
                    return (
                        <div className="banner-principal">
                            <img className="img-tec-page" src={element[0].images.portrait}></img>
                            <p>{element[0].description}</p>
                        </div>
                    )
                }) : null}


                {banner === 1 ? api.map(element => {
                    return (
                        <div className="banner-principal">
                            <img className="img-tec-page" src={element[1].images.portrait}></img>
                            <p>{element[1].description}</p>
                        </div>
                    )
                }) : null}


                {banner === 2 ? api.map(element => {
                    return (
                        <div className="banner-principal">
                            <img className="img-tec-page" src={element[2].images.portrait}></img>
                            <p>{element[2].description}</p>
                        </div>
                    )
                }) : null}
            </div>

            <div className="tec-page-cards">
                <TecnhologyCardPage id='0' handleClick={handleClick} title='Launch vehicle' img={IMAGES.Launch} />
                <TecnhologyCardPage id='1' handleClick={handleClick} title='Spaceport' img={IMAGES.SpacePort2} />
                <TecnhologyCardPage id='2' handleClick={handleClick} title='Space capsule' img={IMAGES.Capsule} />
            </div>
        </div>
    )
}


export default TecnhologyPage