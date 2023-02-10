import React from 'react'
import img1 from '../../../../assets/pick-meals-image.png'
import img2 from '../../../../assets/choose-image.png'
import img3 from '../../../../assets/delivery-image.png'

import { Container } from './styles'

const Third = () => {

    return (
        <Container id='work'>
            <main className='terceira-imagem'>
                <div className='terceira-imagem-texto'>
                    <span className='work'>Work</span>
                    <h1>How It Works</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
                        magna non et elit. Dolor  turpis molestie dui <br />
                        magnis facilisis at fringilla quam.
                    </p>
                </div>
                <div className='quadros'>
                    <div className='quadro'> 
                        <img src={img1} alt="img1" />
                        <h3>Pick Meals</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. br Maecenas orci et sagittis duis elementum interdum facilisi bibendum.
                        </p>
                    </div>

                    <div className='quadro'>
                        <img src={img2} alt="img1" />
                        <h3>Choose How Often</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Maecenas orci et
                        </p>
                    </div>

                    <div className='quadro'>
                        <img src={img3} alt="img1" />
                        <h3>Fast Deliveries</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum
                        </p>
                    </div>

                </div>
            </main>
        </Container>
    )
}

export default Third