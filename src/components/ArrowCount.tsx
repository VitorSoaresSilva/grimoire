import {Container,Buttons} from "@/styles/components/ArrowCount"
import { useState, useEffect } from "react"
import Cookie from 'js-cookie'
import { FiEdit3, FiRefreshCcw } from "react-icons/fi";

export default function initialArrowCount ({initialData}) {
    const basevalue = {count: 0, maxSize: 20};
    const [count,setCount] = useState(initialData ? JSON.parse(initialData).count : basevalue.count)
    const [maxSize,setMaxSize] = useState(initialData ? JSON.parse(initialData).maxSize : basevalue.maxSize);
    const [editMode, setEditMode] = useState(false);
    const [inputValue,setInputValue] = useState(maxSize);
    useEffect(()=>{
        Cookie.set('arrowData',JSON.stringify({count: count, maxSize: maxSize}));
    },[count,maxSize]);

    function handleChangeMax(){
        if(inputValue <= 0){
            return;
        }
        setMaxSize(inputValue)
        if(count > inputValue){
            setCount(Number(inputValue));
        }
        changeEditMode();
    }
    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function handleChangeCount(value){
        const newValue = count + value;
        if(newValue >= 0 && newValue<= maxSize){
            setCount(count + value);
        }
    }
    function reset(){
        setCount(basevalue.count);
        setMaxSize(basevalue.maxSize);
    }
    function changeEditMode(){
        setEditMode(!editMode);
    }
    return(
        <Container>
            <div className="header">
                <h1>Flechas</h1>
                <div className="options">
                    <button onClick={reset}>
                        <FiRefreshCcw size={18}/>
                    </button>
                    <button onClick={changeEditMode}>
                        <FiEdit3 size={18}/>
                    </button>
                </div>
            </div>
            {!editMode ? 
            <>
                <div className="content">
                    <p>{count}/{maxSize}</p>
                </div>
                <Buttons>
                    <button 
                        type="button" 
                        onClick={()=>{handleChangeCount(-1)}}>
                            Remove
                    </button>
                    <button 
                        type="button" 
                        onClick={()=>{handleChangeCount(1)}}>
                        Add
                    </button>
                </Buttons>
                </>
            : 
                <div className="edit">
                    <label htmlFor="inputMaxValue">Valor Máximo</label>
                    <input type="number" value={inputValue} onChange={handleChange} id="inputMaxValue"/>
                    <button onClick={handleChangeMax}>Alterar</button>
                </div>
            }
        </Container>
    )
}