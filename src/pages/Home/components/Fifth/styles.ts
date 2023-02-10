import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  
  a {
    text-decoration: none;
    color: initial;
  }

  .quinta-imagem-texto{
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 4rem;

      h1 {
        text-align: center;
        color: #4C4C4C;
      }
      
      .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
      
        background: white;
        border-radius: 100px;
        width: 550px;

        input {
          border: none;
          padding: 0;
          margin: 0;
          background-color: transparent;
          font-size: inherit;
          font-family: inherit;
          color: inherit;

        }

        button{
          padding: 15px 50px;
          border: none;
          background: #FE9E0D;
          border-radius: 100px;
          color: white;
          font-weight: bold;
        }
    }
  }

  .footer{
    h3 {
      margin-top: 100px;
      padding: 50px;
      background: #fff;
      color: #303030;
      text-align: center;
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