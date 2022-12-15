import Header from "../../Header/Header"
import Video from '../../videos/background-tec.mp4'
import TecnhologyCardPage from "../TecnhologyCardPage/TecnhologyCardPage"
import React from "react"
import { useState, useEffect } from "react"
import './TecnhologyPage.css'
import './TecnhologyPageMedia.css'

const TecnhologyPage = () => {

    const [data, setData] = useState([])


    useEffect(() => {

        async function getApi() {
            const response = await fetch('http://localhost:3000/technology')
            const data = await response.json()
            setData(data)
            console.log(data)
        }
        getApi()

    }, [])

    const [teste, setTeste] = useState(0)


    const Launch = data.filter(element => element.name == "Launch vehicle")
    const Port = data.filter(element => element.name == "Spaceport")
    const Capsule = data.filter(element => element.name == "Space capsule")


    const [a, setA] = useState()
    function handleClick(index) {
        if (index.currentTarget.id === '0') {
            setTeste(0)
        }
        if (index.currentTarget.id === '1') {
            setTeste(1)
        }
        if (index.currentTarget.id === '2') {
            setTeste(2)
        }

    }


    return (
        <div className="tec-page">
            <video autoPlay loop muted src={Video} />
            <Header />
            <div className="tec-page-cards ">
                {teste === 0 ? Launch.map(element => {
                    return (
                        <div className="banner-principal">
                            <img className="img-tec-page" src={element.images.portrait}></img>
                            <p>{element.description}</p>
                        </div>
                    )
                }) : null}
                {teste === 1 ? Port.map(element => {
                    return (
                        <div className="banner-principal">
                            <img className="img-tec-page" src={element.images.portrait}></img>
                            <p>{element.description}</p>
                        </div>

                    )
                }) : null}
                {teste === 2 ? Capsule.map(element => {
                    return (
                        <div className="banner-principal">
                            <img className="img-tec-page" src={element.images.portrait}></img>
                            <p>{element.description}</p>
                        </div>
                    )
                }) : null}
            </div>
            <div className="tec-page-cards">
                {data.map((element, index) => {
                    return (
                        <TecnhologyCardPage key={index} id={index} handleClick={handleClick} title={element.name} img={element.images.portrait} />
                    )
                })}
            </div>
        </div>
    )
}


export default TecnhologyPage