import styled from 'styled-components';

export const CardHeader = styled.div`
    position: relative;
    .edit{
        display: flex;
        justify-content: center;
        align-items: center;
        flex:2;
    }
    .options{
        position: absolute;
        right: 10px;
        top:2px;
    }
    .options button{
        margin-right:3px;
        border-radius: 4px;
        padding: 4px;
        font-size: 0px;
        background: ${props => props.theme.colors.background.secondary}
    }
    .options button:hover{
        filter: brightness(0.9);
    }
    button{
        padding: 2px 5px;
        margin: 2px 2px;
    }
`;