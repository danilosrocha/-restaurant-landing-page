import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  
  a {
    text-decoration: none;
    color: initial;
  }


  .quarta-imagem-texto{
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;

      .work {
        color: #F4980D;
        font-weight: 700;
      }

      p {
        font-size: 1.2rem;
        color: #828282;
        text-align: center;
      }
    }

    .quadros {
        display: grid;
        grid-template-columns: 1fr;
        gap: 5rem;
        padding: 90px;
        

        .quadro{
          margin: 0 auto;
          background: #FFFFFF;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 21px 0px;
          gap: 40px;
          max-width: 700px;

          .star{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;
          }

          p{
            text-align: center;
            padding: 0rem 10rem;
          }
          
          h3{
            margin-bottom: 20px;
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