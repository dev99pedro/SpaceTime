import React from "react"
import './Section.css'
import Cards from '../Cards/Cards'
import './SectionMedia.css'



const Section = () => {
    return (
        <div>
            <div className="section">
                <div className="section-explore">
                    <h2>EXPLORE</h2>
                </div>
                <div className="section-textos">
                    <div className="section-titulo">
                        <h1>SO, YOU WANT TO TRAVEL TO</h1>
                        <span className="space-texto">
                            <h2>SPACE</h2>
                        </span>
                    </div>
                    <div className="section-subtitulo">
                        <p>Let's face it; if you want to go space, you might as well genuinely go to outer space and not hover kind of on the edgte of it.
                            Well sit back, and relax because we'll give you a truly out of this world experience</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Section