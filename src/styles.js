import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Globals = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    #root {
        height: 100%;
        width: 100vw;
    }

    body {
        font: 400 1rem Fira Code;
        line-height: 1.5;
        color: #DF1619;
        background-color: #f2eded;
    }

    h1 {
        font-family: Do Hyeon;
        margin: 1rem 0;
    }
`;

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 auto;
    position: relative;

    p {
        position: absolute;
        top: 60%;
        font: 400 1.125em Do Hyeon;
    }
`;

export const CssBox = styled.div `
    margin-left: 2rem;
    margin-bottom: 2rem;
`;

export const ObjectInput = styled.input `
    width: 80px;
    text-align: center;
    margin-left: 0.5rem;
    border-radius: 2px;
    border: none;
    background-color: #B6CCCE;
    color: #353535;
    font: 400 1rem Fira Code;
`;
