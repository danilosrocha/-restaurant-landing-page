import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: auto;
  }

  nav {
    padding: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90px;
  }
/* 
  div a:hover{
    color: #FE9E0A;
  } */

  .navbar-menu-container {
    display: none;
    margin: 0;
    padding: 0;
  }

  .navbar-links-container {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    flex: 1;
  }

  .navbar-links-container a, svg {
    margin-right: 2rem;
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .primary-button {
      padding: 0.9rem 1.75rem;
      background-color: white;
      outline: none;
      border: none;
      border-radius: 5rem;
      font-size: 1.1rem;
      cursor: pointer;
      font-weight: 600;
      transition: 0.2s;
  }

  .navbar-cart-icon {
      font-size: 1.25rem;
  }

  .primary-button:hover {
      background-color: rgb(234, 234, 234);
  }

  .navbar-menu-container svg {
      font-size: 1.5rem;
      cursor: pointer;
  }

  @media (max-width: 1000px) {
      .navbar-links-container a {
          margin-right: 1rem;
          font-size: 1rem;
      }

      .primary-button {
          font-size: 1rem;
      }

  }

  @media (max-width: 900px) {

      .nav-logo-container {
          max-width: 140px;
      }

      .navbar-links-container {
          display: none;
      }

      .navbar-menu-container {
          display: flex;

      }

    }

  @media (max-width: 600px) {

      .home-bannerImage-container,
      .about-background-image-container {
          display: none;
      }
  }
`;