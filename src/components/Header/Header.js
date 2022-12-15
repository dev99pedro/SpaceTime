import './Header.css'
import LOGO from '../img/logo.svg'
import CANCEL from '../img/cancel.png'
import './MediaHeader.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HamburgerIcon from '../img/menu.png'
import { useState, useEffect } from 'react'
const Header = () => {



    const [headerLista, setHeaderLista] = useState('header-lista-links')
    const [header, setHeader] = useState('header')
    const [click, setClick] = useState(true)
    const [img, setImg] = useState(HamburgerIcon)

    const showMenuMobile = () => {
        setClick(!click)
        if (click) {
            setImg(CANCEL)
            setHeaderLista('header-lista-links-mobile ')
            setHeader('header-mobile')
        } else {
            setHeaderLista('header-lista-links')
            setHeader('header')
            setImg(HamburgerIcon)
        }

    }


    if (img === CANCEL && header === 'header') {
        setImg(HamburgerIcon)
        setClick(!click)
    }


    const resizeHeader = () => {
        if (window.innerWidth >= 800) {
            setHeaderLista('header-lista-links')
            setHeader('header')
        }

    }

    window.addEventListener('resize', resizeHeader)




    return (
        <header className={header} >
            <Link to='/'>
                <div className='header-logo'>
                    <img className='logo' src={LOGO} />
                </div>
            </Link>
            <hr className='traco-cinza' />

            <div className="header-lista">
                <ul className={headerLista}>
                    <Link to="/" className='link-header'>
                        <li> Home</li>
                    </Link>
                    <Link to="/destination" className='link-header'>
                        <li>Destination</li>
                    </Link>
                    <Link className='link-header' to="/crew">
                        <li> Crew</li>
                    </Link>
                    <Link className='link-header' to="/tecnhology">
                        <li> Technology</li>
                    </Link>
                </ul>
            </div>
            <div className='hamburger' onClick={showMenuMobile}>
                <img className='logo-mobile' src={img} />
            </div>
        </header>
    )
}

export default Header