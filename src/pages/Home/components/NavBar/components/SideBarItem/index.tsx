import React, { useState } from 'react'
import logo from '../../assets/Logo.svg'
import { Container } from './styles';

const SideBarItem = ({ Icon, Text }) => {

    return (
        <Container>
            <Icon />
            <text>{Text}</text>
        </Container>
    );
};

export default SideBarItem;