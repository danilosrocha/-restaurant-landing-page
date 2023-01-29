import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    body {
        font-family: "roboto", sans-serif;
        max-width: 100%;
        overflow-x: hidden;
        background-color: #f6f6f6;
    }
    
`;