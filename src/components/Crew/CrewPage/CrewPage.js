
import Header from '../../Header/Header'
import Video from '../../videos/backgroundCrew.mp4'
import React, { useEffect, useState } from 'react';
import { Link, } from "react-router-dom";
import Slider from "react-slick";
import CrewItemPage from './CrewItemPage';









const CrewPage = () => {


    const [data, setData] = useState([])



    useEffect(() => {
        async function getApi() {
            const response = await fetch('http://localhost:3000/crew')
            const data = await response.json()
            setData(data)
            console.log(data[0].images.png)
        }

        getApi()
    }, [])



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
                {data.map((element, index) => {
                    return (
                        <div className='teste'>
                            <CrewItemPage namePerson={element.name} img={element.images.png} role={element.role} bio={element.bio} />
                        </div>
                    )
                })}
            </Slider>

        </div>
    )
}

export default CrewPage