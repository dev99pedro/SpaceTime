import React from "react";
import CardsItem from "./CardsItem/CardsItem"
import './Cards.css'
import IMAGES from '../ImagesExport/index'
import './CardsMedia.css'



const Cards = () => {




    return (
        <div className="cards">
            <div className="title-cards">
                <h1>Check Out</h1>
            </div>
            <div className="cards-itens">
                <CardsItem path="./moon" photo={IMAGES.Moon} title="Moon" description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." />
                <CardsItem path="./mars" photo={IMAGES.Mars} title="Mars" description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!" />
                <CardsItem path='./europa' photo={IMAGES.Europa} title="Europa" description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin." />
                <CardsItem path='./titan' photo={IMAGES.Titan} title="Titan" description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn." />
            </div>
        </div >
    )
}

export default Cards