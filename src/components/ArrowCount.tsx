import {Container,Buttons} from "@/styles/components/ArrowCount"
import { useState } from "react"
export default function ArrowCount(){
    const [count,setCount] = useState(0);

    function handleChangeCount(value){
        const newValue = count + value;
        if(newValue >= 0){
            setCount(count + value);
        }
    }
    return(
        <Container>
            <header>Flechas</header>
            <div className="content">
                <p>{count}</p>
            </div>
            <Buttons>
                <button type="button" onClick={()=>{handleChangeCount(-1)}}>Remove</button>
                <button type="button" onClick={()=>{handleChangeCount(1)}}>Add</button>
            </Buttons>
        </Container>
    )
}