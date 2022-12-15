import './CrewItemPage.css'

function CrewItemPage({ namePerson, role, bio, img }) {
    return (

        <div className="card-box-crew-page">
            <div className='crew-section-page'>
                <div className='card-text-crew-page'>
                    <h1 className="card-text-title-crew-page" >{namePerson}</h1>
                    <p className="card-text-description-crew-page" ><strong>{role}</strong></p>
                    <p className="card-text-description-crew-page"> {bio}</p>
                </div>
                <div className='card-img-crew' >
                    <img className='img-person' src={img} />
                </div>
            </div>
        </div>
    )
}

export default CrewItemPage


