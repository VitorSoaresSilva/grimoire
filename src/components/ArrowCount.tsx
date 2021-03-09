import {Container,Buttons} from "@/styles/components/ArrowCount"
import { useState, useEffect } from "react"
import Cookie from 'js-cookie'

export default function initialArrowCount ({initialArrowCount}) {
    const [count,setCount] = useState( initialArrowCount ?? 0);
    useEffect(()=>{
        Cookie.set('arrowCount',(count));
    },[count]);

    function handleChangeCount(value){
        const newValue = count + value;
        if(newValue >= 0){
            setCount(count + value);
        }
    }
    return(
        <Container>
            <div className="header">
                    <h1>Flechas</h1>
                </div>
            <div className="content">
                <p>{count}</p>
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
        </Container>
    )
}