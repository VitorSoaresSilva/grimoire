import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.background.secondary};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    margin: 10px;
    flex:1;


    .enemy{
        background: #ff4545;
    }
    .player{
        background: #45ff45;
    }
    .dead{
        filter: brightness(0.6);
    }
    .card{
        height: 2rem;
        border-radius: 4px;
        margin: 5px 2px;
        padding: 2px;
    }
    .time{
        content: "";
        border-radius: 50%;
    }
`;