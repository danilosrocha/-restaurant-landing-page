import React, { useState } from 'react'
import logo from '../../assets/Logo.svg'
import { BiHomeAlt, BiInfoCircle, BiUserVoice, BiPhone, BiCart } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { Container } from './styles';

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const menuOptions = [
        {
            text: "Home",
            icon: <BiHomeAlt />
        },
        {
            text: "About",
            icon: <BiInfoCircle />
        },
        {
            text: "Testimonials",
            icon: <BiUserVoice />
        },
        {
            text: "Contact",
            icon: <BiPhone />
        },
        {
            text: "Cart",
            icon: <BiCart />
        },
    ]

    return (
        <Container>
            <nav>
                <div className="nav-logo-container">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-links-container">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">Contact</a>
                    <a href="">
                        <BsCartFill className="navbar-cart-icon" />
                    </a>
                    <button className="primary-button">Bookings Now</button>
                </div>
                <div className="navbar-menu-container">

                </div>
            </nav>
        </Container>
    );
};

export default NavBar;