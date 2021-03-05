import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin: 10px;
  flex:1;

  .header{
    flex:1;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1rem;
    h1{
      padding: 5px;
    }
  }
  .content{
    display:flex;
    flex:12;
    flex-direction: row;
    justify-content:flex-start;
    align-items: flex-start;
    padding: 0;
  }
  .cards{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;
  }
  p{
    text-align: center;
    font-size: 1rem;
    color: ${props => props.theme.colors.text.secondary}
  }
  .card{
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0 10px;
    min-width: 80px;
  }
  .card button{
    /* flex:1; */

  }
  .card p {
    font-family: Roboto, sans-serif;
    color: #000;
  }
  .card span{
    font-weight: 600;
    margin-left: 4px;
  }
  button{
    padding: 5px;
    border-radius: 4px;
    margin: 3px;
    /* background: #ffff00; */
  }
  .buttons{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: row;

  }
  .right{
    display: flex;
    flex-direction: column;
    padding: 5px;
    flex:1;
    border: 1px solid #000;
    border-radius: 4px;
  }
  .input{
    display:flex;
    align-items: center;
    justify-content: center;

  }
  .input button{
    font-size: 0px;
  }
  .input input{
    height: 1.5rem;
  }
`;