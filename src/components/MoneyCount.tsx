import { Container } from "@/styles/components/MoneyCount";
import { useState } from "react"

export default function MoneyCount(){
    const [money,setMoney] = useState({ pl:0, po:0, pe:0, pp:0,pc:0});
    const [curCoin, setCurCoin] = useState('po');
    const [inputValue,setInputValue] = useState(0)

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
    }
    function handleChange(event) {
        setInputValue(event.target.value);
    }
    return(
        <Container>
            <div className="header">
                <h1>Money count</h1>
                <p>{curCoin}</p>
            </div>
            <div className="content">
                {/* <div className="left"> */}
                    <div className="cards">
                        <div className="card">
                            <p>PL: {money.pl}</p>
                            <button type="button" onClick={()=>setCurCoin('pl')}>Mudar Moeda</button>
                        </div>
                        <div className="card">
                            <p>PO: {money.po}</p>
                            <button type="button" onClick={()=>setCurCoin('po')}>Mudar Moeda</button>
                        </div>
                        <div className="card">
                            <p>PE: {money.pe}</p>
                            <button type="button" onClick={()=>setCurCoin('pe')}>Mudar Moeda</button>
                        </div>
                        <div className="card">
                            <p>PP: {money.pp}</p>
                            <button type="button" onClick={()=>setCurCoin('pp')}>Mudar Moeda</button>
                        </div>
                        <div className="card">
                            <p>PC: {money.pc}</p>
                            <button type="button" onClick={()=>setCurCoin('pc')}>Mudar Moeda</button>
                        </div>
                    {/* </div> */}
                </div>
                <div className="right">
                    <div className="buttons">
                        <button type="button" onClick={()=>handleChangeCount(-100)}>-100  {curCoin.toLocaleUpperCase()} </button>
                        <button type="button" onClick={()=>handleChangeCount(-10)}>-10  {curCoin.toLocaleUpperCase()} </button>
                        <button type="button" onClick={()=>handleChangeCount(-1)}>-1 {curCoin.toLocaleUpperCase()} </button>
                        <button type="button" onClick={()=>handleChangeCount(1)}>+1 {curCoin.toLocaleUpperCase()} </button>
                        <button type="button" onClick={()=>handleChangeCount(10)}>+10 {curCoin.toLocaleUpperCase()} </button>
                        <button type="button" onClick={()=>handleChangeCount(100)}>+100 {curCoin.toLocaleUpperCase()} </button>
                    </div>
                    <div className="input">
                        <input type="number" value={inputValue} onChange={handleChange}/>
                        <button type="button" onClick={()=>handleChangeCount(inputValue)}>Adicionar {curCoin.toLocaleUpperCase()} </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}