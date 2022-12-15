import './CrewItem.css'
import './CrewMedia.css'








const CrewItem = ({ img, namePerson, role, bio }) => {




    return (
        <div className="card-box-crew">
            <div className='crew-section'>
                <div className='card-img-crew' >
                    <img className='img-person' src={img} />
                </div>

                <div className='card-text-crew'>
                    <h1 className="card-text-title-crew" >{namePerson}</h1>
                    <p className="card-text-description-crew" ><strong className='strong-role'>{role}</strong></p>
                    <p className="card-text-description-crew"> {bio}</p>
                </div>
            </div>
        </div>

    )
}

export default CrewItem