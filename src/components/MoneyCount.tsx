import { Container } from "@/styles/components/MoneyCount";
import { useState } from "react"
import {FiEdit3, FiPlus,FiChevronDown,FiChevronUp} from 'react-icons/fi';

export default function MoneyCount(){
    // const [money,setMoney] = useState({ pl:0, po:0, pe:0, pp:0,pc:0});
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

    // const conversion = []
    /**
     * Name
     * value
     * index - tabela de conversao
     */

    //pc pp  pe   po    pl
    //1 1/10 1/50 1/100 1/1.000
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
    function tryConvertToUp(index){
        // receber uma variavel para converter para baixo ou para cima
        if(index == (money.length - 1)){
            console.log('cannot convert max');
            return;
        }
        if(Math.floor(money[index].value / conversion[index + 1]) > 0){
            let state = money;
            state[index].value -= conversion[index + 1];
            state[index + 1].value += 1;
            setMoney([...state]);
        }else{
            console.log('Cannot convert')
        }
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
                                <button type="button" onClick={()=>tryConvertToUp(index)}><FiChevronUp size="16"/></button>
                                <button type="button" onClick={()=>tryConvertToUp(index)}><FiChevronDown size="16"/></button>
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