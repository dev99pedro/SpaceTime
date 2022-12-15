import React from "react";
import './CardsDestination.css'

import Header from '../../Header/Header'
import { useState } from "react";
import CardsPlanetPopUp from '../CardsPlanetPopUp/CardsPlanetPopUp'
import VIDEO from '../../videos/video-CardDestination.mp4'
import PlanetsCardDestination from "../PlanetsCardDestination/PlanetsCardDestination";
import './MediaCardsDestination.css'
import IMAGES from "../../ImagesExport"




const Cards = () => {





    const [changeClass, setchangeClass] = useState('planets-cards-destination-box-card-img')
    const [sizePlanet, setSizePlanet] = useState('')


    const [toggle, setToggle] = useState(0)
    const planetaClicado = (index) => {
        setToggle(index)

    }



    function changeSizePlanet() {
        setchangeClass('planets-cards-destination-box-card-img-size')
        setSizePlanet('100px')

    }

    return (
        <div className="cards-destination">
            <video autoPlay loop muted src={VIDEO} />
            <Header />
            <div className="title-cards-destination">
                <h1> Navigate through space </h1>
            </div>
            <div className="cards-itens-destination" >
                <PlanetsCardDestination changeSizePlanet={changeSizePlanet} minHeight={sizePlanet} handleSizePlanet={changeClass} handleClick={() => planetaClicado(1)} photo={IMAGES.Moon} title="Moon" />
                <PlanetsCardDestination changeSizePlanet={changeSizePlanet} minHeight={sizePlanet} handleSizePlanet={changeClass} handleClick={() => planetaClicado(2)} photo={IMAGES.Mars} title="Mars" />
                <PlanetsCardDestination changeSizePlanet={changeSizePlanet} minHeight={sizePlanet} handleSizePlanet={changeClass} handleClick={() => planetaClicado(3)} photo={IMAGES.Europa} title="Europa" />
                <PlanetsCardDestination changeSizePlanet={changeSizePlanet} minHeight={sizePlanet} handleSizePlanet={changeClass} handleClick={() => planetaClicado(4)} photo={IMAGES.Titan} title="Titan" />
            </div>
            <div className="cards-itens-result">
                {toggle === 1 && <CardsPlanetPopUp link="/moon" img={IMAGES.MoonCard} title='Moon' span='Visitar página' subtitle="The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet,[f] with a diameter about one-quarter that of Earth (comparable to the width of Australia).The Moon is a planetary-mass object with a differentiated rocky body, making it a satellite planet under the geophysical definitions of the term" />}
                {toggle === 2 && <CardsPlanetPopUp link="/mars" img={IMAGES.Mars} title='Mars' span='Visitar página' subtitle="Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere (less than 1% that of Earth's), and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. It has two small and irregularly shaped moons: Phobos and Deimos." />}
                {toggle === 3 && <CardsPlanetPopUp link="/europa" img={IMAGES.Europa} title='Europa' span='Visitar página' subtitle="Europa , or Jupiter II, is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet of all the 80 known moons of Jupiter. It is also the sixth-largest moon in the Solar System. Europa was discovered in 1610 by Galileo Galilei[1] and was named after Europa, the Phoenician mother of King Minos of Crete and lover of Zeus (the Greek equivalent of the Roman god Jupiter." />}
                {toggle === 4 && <CardsPlanetPopUp link="/titan" img={IMAGES.Titan} title='Titan' span='Visitar página' subtitle="Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere, and is the only known object in space other than Earth on which clear evidence of stable bodies of surface liquid has been found. Titan is one of the seven gravitationally rounded moons in orbit around Saturn, and the second most distant from Saturn of those seven." />}
            </div>
        </div >
    )
}

export default Cards