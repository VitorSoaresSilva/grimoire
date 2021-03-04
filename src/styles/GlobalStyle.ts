import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        border:0;
    }
    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }
`;