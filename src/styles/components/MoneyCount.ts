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
    margin: 0 10px 10px 0;
    border: 1px solid #000;
    border-radius: 5px;
    position: relative;
    padding-top: 8px;
  }
  .coinSelected{
    background: rgba(200,200,0,0.7);
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
    justify-content:space-around;
    align-items: center;
    padding: 0 10px;
    min-width: 80px;
    border-radius: 4px;
    min-width: 5rem;
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
    padding: 7px;
    flex:1;
    border: 1px solid #000;
    border-radius: 4px;
    position: relative;
  }
  span.titleCard{
    position: absolute;
    top: -10px;
    background: ${props => props.theme.colors.background.secondary};
    padding: 1px 5px;
  }
  .input{
    display:flex;
    justify-content: center;

  }
  .input button{
    font-size: 0px;
    margin:0 0 0 5px;
  }
  .input input{
    width: 3rem;
    text-align: right;
    border-radius: 4px;
  }
`;