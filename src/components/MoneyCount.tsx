import { Container } from "@/styles/components/MoneyCount";
import { useState } from "react"
import {FiEdit3, FiPlus} from 'react-icons/fi';

export default function MoneyCount(){
    const [money,setMoney] = useState({ pl:0, po:0, pe:0, pp:0,pc:0});
    const [curCoin, setCurCoin] = useState('po');
    const [inputValue,setInputValue] = useState(0)

    const buttonsToChangeValue = [-100,-10,-1,1,10,100];
    let pl = 0 ; //Math.floor(money / 1000);
    let po = 0 ; //Math.floor((money % 1000) / 100);
    let pe = 0 ; //Math.floor((money % 100)/5)
    let pp = 0 ; //Math.floor((money % 10))
    let pc = 0 ; //money;

    //pc pp  pe   po    pl
    //1 1/10 1/50 1/100 1/1.000
    function handleChangeCount(value){
        let state = money;
        let newValue = (state[curCoin] + Number(value));
        if(newValue >= 0){
            state[curCoin] = newValue;
        }
        setMoney({...state})
        setInputValue(0);
    }
    function handleChange(event) {
        setInputValue(event.target.value);
    }
    return(
        <Container>
            <div className="header">
                <h1>Dinheiro</h1>
            </div>
            <div className="content">
                    <div className="cards">
                    <span className="titleCard">Seu dinheiro</span>
                        {Object.keys(money).map((coin)=>{
                            return(
                            <div className={`card  ${curCoin === coin ? 'coinSelected' : ''} `}>
                                <p>{coin.toLocaleUpperCase()}: <strong>{money[coin]}</strong></p>
                                <button type="button" onClick={()=>setCurCoin(coin)}><FiEdit3 size="16"/></button>
                            </div>
                            )
                        })}
                </div>
                <div className="right">
                    <span className="titleCard">Modificar dinheiro</span>
                    <div className="buttons">
                        {buttonsToChangeValue.map((value=>{
                            return(
                                <button type="button" onClick={()=>handleChangeCount(value)}>{value}</button>
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