import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  
  a {
    text-decoration: none;
    color: initial;
  }


  .segunda-imagem{
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: relative;

    .banner-background{
      position: absolute;
      top: 0;
      left: 0;
      max-width: 210px;
    }

    img {
      display: block;
      height: auto;
      max-width: 500px;
    }

    .segunda-imagem-texto{
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .about {
        color: #F4980D;
        font-weight: 700;
      }
      h1 {
        font-size: 3.75rem;
        color: #4C4C4C;
      }

      p {
        font-size: 1.6rem;
        color: #828282;
      }

      a {
        align-self: start;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 30px 55px;
        gap: 20px;
        background: #FE9E0D;
        border-radius: 100px;
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;
        justify-content: center;

        .text{
          color: white;
          font-weight: bold;
        }
      }

      .icon{
        display: grid;
        grid-template-columns: 1fr 3fr;
        align-items: center;
        justify-content: center;
        
        
        svg {
          margin-left: 2rem;
        }

        a{
          background: transparent;
          padding: 0;
          align-self: center;
          justify-self: start;
          margin-left: 1rem;
          
        }
      }
    }

  }

  @media (min-width: 1200px){
    .banner-background {
      display: none;
    }

  
  }

  @media (max-width: 1000px) {
    .banner-background {
      max-width: 600px;
    }
    .primeira_imagem_texto{
      gap: 1rem;

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      a {
        align-self: start;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 30px 55px;
        gap: 20px;
        background: #FE9E0D;
        border-radius: 100px;
      }
    }
  }

  @media (max-width: 900px) {
    .banner-background {
      display: none;
    }

    .primeira_imagem{
      display: none;
    }
  }

  @media (max-width: 600px) {

  }

`;