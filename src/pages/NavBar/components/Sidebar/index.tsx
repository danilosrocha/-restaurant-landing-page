import React from 'react'
import { FaTimes } from "react-icons/fa";
import { Container, Content } from './styles';
import { BiHomeAlt, BiInfoCircle, BiUserVoice, BiPhone, BiCart } from "react-icons/bi";
import SideBarItem from '../SideBarItem';

function Sidebar({ active }) {

    const handleCloseSideBar = () => {
        active(false)
    }

    return (
        <Container>

            <FaTimes onClick={handleCloseSideBar} size={36} />

            <Content>
                <SideBarItem Icon={BiHomeAlt} Text="Home" />
                <SideBarItem Icon={BiInfoCircle} Text="About" />
                <SideBarItem Icon={BiUserVoice} Text="Testimonials" />
                <SideBarItem Icon={BiPhone} Text="Contact" />
                <SideBarItem Icon={BiCart} Text="Shop" />
            </Content>
        </Container>
    )
}

export default Sidebar