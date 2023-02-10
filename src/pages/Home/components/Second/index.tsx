import React from 'react'
import img2 from '../../../../assets/about-background.png'
import img3 from '../../../../assets/about-background-image.png'
import { Container } from './styles'
import { AiFillPlayCircle } from "react-icons/ai";
const Second = () => {

    return (
        <Container id='about'>
            <main className='segunda-imagem'>
                <div>
                    <img className='banner-background' src={img2} alt="banner" />
                    <img className='about-img' src={img3} alt="banner" />
                </div>
                <div className='segunda-imagem-texto'>
                    <span className='about'>About</span>
                    <h1>Your Favourite Food<br />
                        Delivered Hot &<br />
                        Fresh<br />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt
                        magna non et elit. Dolor  turpis molestie dui
                        magnis facilisis at fringilla quam.
                    </p>
                    <p>
                        Non tincidunt magna non et elit. Dolor turpis molestie
                        dui magnis facilisis at fringilla quam.
                    </p>
                    <div className='grid'>
                        <a className='text' href="">Learn More</a>
                        <div className='icon'>
                            <AiFillPlayCircle size={80} />
                            <a href="">Watch Video</a>
                        </div>
                    </div>
                </div>

            </main>
        </Container>
    )
}

export default Second