import React from 'react'
import img1 from '../../../../assets/john-doe-image.png'
import img2 from '../../../../assets/choose-image.png'
import { AiFillStar } from "react-icons/ai";

import { Container } from './styles'

const Fourth = () => {

    return (
        <Container id='testimonial'>
            <main className='quarta-imagem'>
                <div className='quarta-imagem-texto'>
                    <span className='work'>Testimonial</span>
                    <h1>What They Are Saying</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
                        magna non et elit. Dolor  turpis molestie dui <br />
                        magnis facilisis at fringilla quam.
                    </p>
                </div>
                <div className='quadros'>
                    <div className='quadro'>
                        <img src={img1} alt="img1" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur. br Maecenas orci et sagittis duis elementum interdum facilisi bibendum.
                        </p>
                        <div className='star'>
                            <AiFillStar color='#FE9E0D' size={22} />
                            <AiFillStar color='#FE9E0D' size={22} />
                            <AiFillStar color='#FE9E0D' size={22} />
                            <AiFillStar color='#FE9E0D' size={22} />
                            <AiFillStar color='#FE9E0D' size={22} />
                        </div>
                        <h3>Pick Meals</h3>
                    </div>


                </div>
            </main>
        </Container>
    )
}

export default Fourth