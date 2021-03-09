import { Container } from "@/styles/components/MoneyCount";
import { useState } from "react"
import {FiEdit3, FiPlus,FiChevronDown,FiChevronUp,FiChevronsDown,FiChevronsUp} from 'react-icons/fi';

export default function MoneyCount(){
    const [money,setMoney] = useState([
        {name: 'PC',value: 0},
        {name: 'PP',value: 0},
        {name: 'PE',value: 0},
        {name: 'PO',value: 0},
        {name: 'PL',value: 0}
    ]);
    const [curCoin, setCurCoin] = useState(0);
    const [inputValue,setInputValue] = useState(0)
    const buttonsToChangeValue = [-100,-10,-1,1,10,100];
    const conversion = [1,10,50,100,1000];

    function handleChangeCount(value){
        let state = money;
        let newValue = (state[curCoin].value + Number(value));
        if(newValue >= 0){
            state[curCoin].value = newValue;
        }
        setMoney([...state])
        setInputValue(0);
    }
    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function convertUp(index,convertMaximum = 0){
        if(index == (money.length - 1) || (money[index].value - conversion[index + 1]) < 0){
            return;
        }
        let state = money;
        let amount = convertMaximum ? Math.floor(money[index].value / conversion[index + 1]) : 1;
        state[index].value -= amount * conversion[index + 1];
        state[index + 1].value +=  amount;
        setMoney([...state]);
    }
    function convertDown(index, convertMaximum = 0){
        if(index == 0 || money[index].value <= 0){
            return;
        }
        let state = money;
        let amount = convertMaximum ? state[index].value : 1;
        state[index].value -= amount;
        state[index -1].value += amount * conversion[index];
        setMoney([...state]);
    }

    return(
        <Container>
            <div className="header">
                <h1>Dinheiro</h1>
            </div>
            <div className="content">
                    <div className="cards">
                    <span className="titleCard">Seu dinheiro</span>
                        {money.map((coin,index)=>{
                            return(
                            <div className={`card  ${curCoin === index ? 'coinSelected' : ''} `} key={coin.name}>
                                <p>{coin.name}: <strong>{coin.value}</strong></p>
                                <button type="button" onClick={()=>setCurCoin(index)}><FiEdit3 size="16"/></button>
                                <button type="button" onClick={()=>convertDown(index,1)}><FiChevronsDown size="16"/></button>
                                <button type="button" onClick={()=>convertDown(index)}><FiChevronDown size="16"/></button>
                                <button type="button" onClick={()=>convertUp(index)}><FiChevronUp size="16"/></button>
                                <button type="button" onClick={()=>convertUp(index,1)}><FiChevronsUp size="16"/></button>
                            </div>
                            )
                        })}
                </div>
                <div className="right">
                    <span className="titleCard">Modificar dinheiro</span>
                    <div className="buttons">
                        {buttonsToChangeValue.map((value=>{
                            return(
                                <button type="button" onClick={()=>handleChangeCount(value)} key={value.toString()}>{value}</button>
                            )
                        }))}
                    </div>
                    <div className="input">
                        <input 
                            type="number" 
                            value={inputValue} onChange={handleChange}/>
                        <button 
                            type="button" 
                            onClick={()=>handleChangeCount(inputValue)}>
                                <FiPlus size="18"/>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}