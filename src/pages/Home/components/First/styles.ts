import styled from "styled-components";

export const Container = styled.div`
  
  a {
    text-decoration: none;
    color: initial;
  }


  .primeira_imagem{
    padding: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    

    img {
      display: block;
      height: auto;
      max-width: 600px;
    }

    .primeira_imagem_texto{
      display: flex;
      flex-direction: column;
      gap: 2rem;

      h1 {
        font-size: 3.75rem;
        color: #4C4C4C;
      }

      p {
        font-size: 1.6rem;
        color: #828282;
      }

      .button {
        a {
          padding: 0;
          margin: 0;
          align-self: center;
          justify-self: center;
          color: white;
          font-weight: bold;
        }

        svg {
          align-self: center;
          justify-self: center;
        }

        align-self: start;
        display: flex;
        flex-direction: row;
        padding: 25px 55px;
        gap: 20px;
        background: #FE9E0D;
        border-radius: 100px;
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