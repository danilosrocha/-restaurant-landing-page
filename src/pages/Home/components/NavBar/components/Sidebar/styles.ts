import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: end;
    background: #FE9E0D;
    height: 100vh;
    position: fixed;
    top: 0px;
    right: 0px;
    width: 300px;
    animation: showSidebar 0.4s;

    > svg {
    position: fixed;
    top: 43px;
    right: 42px;
  }

  @keyframes showSidebar {
    from {
        opacity: 0;
        width: 0;
    }
    to {
        opacity: 1;
        width: 300px;
    }
  }
`;

export const Content = styled.main`
 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    width: 100%;

`