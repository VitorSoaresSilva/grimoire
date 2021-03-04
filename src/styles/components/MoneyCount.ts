import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  flex:1;
  padding: 10px;
  margin: 10px;

  .header{
    flex:1;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.5rem;
  }
  .content{
    display:flex;
    flex:5;
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
    border: 1px solid #000;
    border-radius: 5px;
  }
  .card p{
    flex:2
  }
  .card button{
    flex:1;
  }
  button{
    padding: 5px;
    border-radius: 4px;
    margin: 3px;
    background: #4f4f00;
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
    /* flex-direction: c; */
    align-items: center;
    justify-content: center;
    input{
      height: 1.5rem;
    }
  }
`;