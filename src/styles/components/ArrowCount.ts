import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  width: 20rem;
  height: 200px; 
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  flex:1;
  margin: 10px;

  .header{
    flex:1;
    justify-content:center;
    display:flex;
    align-items: center;
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.5rem;
    position: relative;
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
  .edit input{
    width: 3rem;
    text-align: right;
    border-radius: 4px;
    margin-right: 5px;
  }
  .edit{
    display: flex;
    justify-content: center;
    align-items: center;
    flex:2;
  }
  .edit button{
    padding: 2px 5px;
    border-radius: 4px;
  }

  .header h1{
    /* font-family: Roboto, sans-serif; */
    /* color: #fff; */
    font-size: 2rem;
    padding: 5px;

  }
  .content{
    flex:1;
  }
  p{
    text-align: center;
    font-size: 2rem;
    color: ${props => props.theme.colors.text.secondary}
  }
`;
export const Buttons = styled.div`
  display:flex;
  flex:1;
  justify-content:center;
  align-items: center;
  /* flex-direction: column; */
  button{
    flex:1;
    margin:1rem;
    padding:1rem;
  }
`;


