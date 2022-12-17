import React, { useEffect, useState } from 'react';
import './Crew.css'
import CrewItem from './CrewItem';
import { Link, } from "react-router-dom";
import { DataBase } from '../../Json/dataBase'
import Slider from "react-slick";






const Crew = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };




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



    const api = DataBase.map(element => element.crew)



    return (
        <div className='cards-crew '>
            <div className='btn-crew'>
                <Link to="/crew" className='link-card-box'>
                    <div class="wrapper">
                        <a className='btn-crew' ><span>MEET THE CREW</span></a>
                    </div>
                </Link>
            </div>
            <Slider {...settings}>
                {data.map((element, index) => {
                    return (
                        <div key={index} className='teste'>

                            <CrewItem namePerson='a' />
                        </div>
                    )
                    })}
              
            </Slider>

        </div>




    )
}


export default Crew