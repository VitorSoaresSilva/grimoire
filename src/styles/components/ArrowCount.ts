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

  header{
    flex:1;
    justify-content:center;
    display:flex;
    align-items: center;
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.5rem;
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


