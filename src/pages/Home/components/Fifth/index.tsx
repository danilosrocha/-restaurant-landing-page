import React from 'react'
import img1 from '../../../../assets/john-doe-image.png'
import img2 from '../../../../assets/choose-image.png'
import { AiFillStar } from "react-icons/ai";

import { Container } from './styles'

const Fourth = () => {

    return (
        <Container id='contato'>
            <main className='quinta-imagem'>
                <div className='quinta-imagem-texto'>
                    <h1>
                        Have Question In Mind? <br /> Let Us Help You
                    </h1>
                    <div className='input'>
                        <input placeholder='yourmail@gmail.com' type="text" />
                        <button>Submit</button>
                    </div>
                </div>
                <footer className='footer'>
                    <h3>Direitos reservados - FOODIE</h3>
                </footer>
            </main>
        </Container>
    )
}

export default Fourth