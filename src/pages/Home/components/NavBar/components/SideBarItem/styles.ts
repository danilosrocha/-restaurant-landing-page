import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: #FE9E0D;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 4rem;
    margin: 0 15px 20px;
    width: 90%;
    transition: 0.5s;

    > svg {
        margin: 0 20px;
    }

    &:hover {
        background: white;
    }
`;