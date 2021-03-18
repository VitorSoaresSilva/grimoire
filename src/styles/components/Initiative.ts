import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.background.secondary};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    margin: 10px;
    flex:1;
    max-width: 300px;
    table{
        border-collapse: collapse;
    }
    tr{
        text-align: left;
        border: 1px solid #000;
    }
    td{
        padding: 2px 5px;
    }

    tr:nth-child(even){
        background: #bbb;
    }
    tr:hover {background-color: #aaa;}
    input{
        flex:1;
        max-width: 3rem;
        margin: 0 5px;
        padding: 2px 0px;
    } 
    
`;

export const Card = styled.div`
        height: 2rem;
        margin: 5px 2px;
        border-bottom: 1px solid #000;
        padding: 2px;
    .time{
        border-radius: 50%;
        height:10px;
        width:10px;
        display: inline-block;
    }
    .enemy{
        background: #ff4545;
        /* color: #ff4545; */
    }
    .player{
        background: #45ff45;
        /* color: #45ff45; */
    }
    .dead{
        filter: brightness(0.6);
    }
    

    
`;