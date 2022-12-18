
import Header from '../../Header/Header'
import Video from '../../videos/backgroundCrew.mp4'
import React from 'react';
import Slider from "react-slick";
import CrewItemPage from './CrewItemPage';
import './CrewPage.css'






const CrewPage = () => {



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        cssEase: "linear"
    };


    return (
        <div className='crew-page'>
            <video autoPlay loop muted src={Video} />
            <Header />
            <Slider {...settings}>
                <CrewItemPage img='https://space-tourism-website-hazel.vercel.app/static/media/image-douglas-hurley.7540fbb61923064f065e.png' bio="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2." role="Commander" namePerson='Douglas Hurley' />
                <CrewItemPage img='https://space-tourism-website-hazel.vercel.app/static/media/image-victor-glover.8a9a5424588b73ec61c2.png' bio="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer." role="Pilot" namePerson='Victor Glover' />
                <CrewItemPage img='https://space-tourism-website-hazel.vercel.app/static/media/image-anousheh-ansari.2d647128496ddc638acd.png' bio="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space." role="Flight Engineer" namePerson='Anousheh Ansari' />
            </Slider>
        </div>
    )
}

export default CrewPage