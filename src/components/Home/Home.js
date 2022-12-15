import Section from "../Section/Section"
import Header from "../Header/Header"
import Video from '../videos/video-1.mp4'
import Cards from "../Cards/Cards"
import Crew from "../Crew/Crew"
import Tecnhology from '../Tecnhology/Tecnhology'
import Footer from "../Footer/Footer"


const Home = () => {
    return (
        <div>
            <div>
                <video autoPlay loop muted src={Video}></video>
                <Header />
                <Section />
                <Cards />
                <Crew />
                <Tecnhology/>
                <Footer/>
             
                
            
             
            </div>
        </div>
    )
}


export default Home