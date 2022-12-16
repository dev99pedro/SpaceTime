
import Header from '../../Header/Header'
import Video from '../../videos/backgroundCrew.mp4'
import React, { useEffect, useState } from 'react';
import { DataBase } from '../../../Json/dataBase';
import Slider from "react-slick";
import CrewItemPage from './CrewItemPage';










const CrewPage = () => {


    const [data, setData] = useState([])



    useEffect(() => {
        async function getApi() {
            const response = await fetch('http://localhost:3000/crew')
            const data = await response.json()
            setData(data)
        }
        getApi()
    }, [])








    // let answer = DataBase.map(element => element.crew)





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



                {/* {answer.map((element) => {
                    // const arrayName = []
                    // const arrayRole = []
                    // const arrayBio = []
                    // for (let i = 0; i < element.length; i++) {
                    //     arrayName.push(element[i].name)
                    //     arrayRole.push(element[i].role)
                    //     arrayBio.push(element[i].bio)
                    // }
                    return (
                        <div className='teste'>
                            <CrewItemPage namePerson={element[1].name} role={element[1].role} bio={element[1].bio} />
                            <CrewItemPage namePerson={element[2].name} role={element[1].role} bio={element[1].bio} />
                            <CrewItemPage namePerson={element[2].name} role={element[1].role} bio={element[1].bio}/>
                            <CrewItemPage namePerson={element[2].name} role={element[1].role} bio={element[1].bio}/>
                            <CrewItemPage namePerson={element[2].name} role={element[1].role} bio={element[1].bio}/>
                        </div>
                    )

                })
                } */}


            </Slider>

        </div>
    )
}

export default CrewPage