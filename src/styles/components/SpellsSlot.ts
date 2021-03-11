import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin: 10px;
  flex:1;
  max-width: 16rem;

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
    position: relative;
    margin-top: 1rem;
  }
  .content{
    flex:1;
    display:flex;
    justify-content:flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .slotCard{
      padding: 2px;
      border: 1px solid #000;
      border-radius: 4px;
      margin: 5px;
  }
  .slotCard button{
      padding: 2px 5px;
      margin: 2px;
  }
  .options{
    position: absolute;
    right: 0px;
    top:-1rem;
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
  .levelSlot{
      /* position: absolute;
      left: 0px;
      top: 0px;
      padding: 5px; */
  }
  .card p{
      display: inline;
      margin-right: 5px;
  }
  .card button{
      font-size: 0px;
      margin-right: 4px;
  }
  .buttons p {
      margin-top: 10px;
  }
  .buttons button{
      margin: 5px;
  }
`;