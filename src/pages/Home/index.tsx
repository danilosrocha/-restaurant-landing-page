import React from 'react'
import NavBar from './components/NavBar'
import banner from '../../assets/home-banner-background.png'
import img1 from '../../assets/home-banner-image.png'
import { Container } from './styles'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
const LandingPage = () => {

    return (
        <Container>
            <NavBar />
            <img className='banner-background' src={banner} alt="banner" />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
        </Container>
    )
}

export default LandingPage