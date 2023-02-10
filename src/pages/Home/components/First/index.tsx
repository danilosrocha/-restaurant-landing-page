import React from 'react'
import img1 from '../../../../assets/home-banner-image.png'
import { Container } from './styles'
import { AiOutlineArrowRight } from "react-icons/ai";
const First = () => {

    return (
        <Container id='home'>
            <main className='primeira_imagem'>
                <div className='primeira_imagem_texto'>
                    <h1>Your Favourite Food<br />
                        Delivered Hot &<br />
                        Fresh<br />
                    </h1>
                    <p>
                        Healthy switcher chefs do all the prep work, like
                        peeding, chopping & marinating, so you can cook
                        a fresh food.
                    </p>
                    <div className='button'>
                        <a href="">Order Now</a>
                        <AiOutlineArrowRight size={20} color="white" />
                    </div>
                </div>
                <div>
                    <img src={img1} alt="img1" />
                </div>
            </main>
        </Container>
    )
}

export default First