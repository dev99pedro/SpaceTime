
import './Footer.css'
import LOGO from '../img/logo.svg'
import IMAGES from '../ImagesExport'
import { Link } from 'react-router-dom'
import './FooterMedia.css'








const Footer = () => {


    const goToTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="footer">
            <div className="footer-texts">
                <div className="text-subtext-footer">
                    <h2>Joint the adventure to recive our best vacations deals</h2>
                    <p>You can unsubscribe at any time.</p>
                </div>
                <div className="input-email">
                    <input type="text" placeholder='Your email' />
                    <button className='btn-footer'>Subscribe</button>
                </div>
            </div>

            <div className="footer-links">
                <div className="about-footer">
                    <Link className='link-footer' to="/">
                        <h3>About us</h3>
                        <p>How it works</p>
                        <p>Testimonials</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Terms of Services</p>
                    </Link>
                </div>
                <div className="contact-footer">
                    <Link className='link-footer' to="/">
                        <h3>Contact Us</h3>
                        <p>Contact</p>
                        <p>Support</p>
                        <p>Destinations</p>
                        <p>Sponsorships</p>
                    </Link>
                </div>
                <div className="videos-footer">
                    <Link className='link-footer' to="/">
                        <h3>Videos</h3>
                        <p>Submit Video</p>
                        <p>Ambassadors</p>
                        <p>Agency</p>
                        <p>Influencer</p>
                    </Link>
                </div>
                <div className="social-footer">
                    <Link className='link-footer' to="/">
                        <h3>Social Media</h3>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Youtube</p>
                        <p>Twitter</p>
                    </Link>
                </div>
            </div>

            <div className="icons-footer">
                <div className="logo-footer" onClick={goToTheTop}>
                    <img alt='logo' src={LOGO}></img>
                </div>

                <div className="copy-footer">
                    <p>Space@2022</p>
                </div>

                <div className="icons-media-footer">
                    <Link className='link-footer' to="/">
                        <img className='icons' src={IMAGES.Insta} />
                        <img className='icons' src={IMAGES.Face} />
                        <img className='icons' src={IMAGES.Twitter} />
                        <img className='icons' src={IMAGES.Youtube} />
                    </Link>
                </div>
            </div>



        </div>
    )
}


export default Footer