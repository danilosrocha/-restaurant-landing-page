import React, { useState } from 'react'
import { Container } from './styles';
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsCartFill } from "react-icons/bs";
import Sidebar from './components/Sidebar';
import logo from '../../assets/Logo.svg'

function NavBar() {
    const [sidebar, setSidebar] = useState(false)

    const [openMenu, setOpenMenu] = useState(false)

    function handleOpenMenu() {
        setOpenMenu(!openMenu)
    }
    return (
        <Container>
            <nav>
                <div className="nav-logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-links-container">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">Contact</a>
                    <BsCartFill className="navbar-cart-icon" />
                    <button className="primary-button">Bookings Now</button>
                </div>
                <div className="navbar-menu-container">
                    <HiOutlineBars3 onClick={handleOpenMenu} size={36} />
                    {openMenu && <Sidebar active={setOpenMenu} />}
                </div>
            </nav>
        </Container>
    )
}

export default NavBar