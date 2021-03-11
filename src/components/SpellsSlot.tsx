import { Container } from "@/styles/components/SpellsSlot";
import { useEffect, useState } from "react"
import { FiEdit3, FiMinus, FiPlus, FiRefreshCcw } from "react-icons/fi";
import Cookie from 'js-cookie';

export default function SpellsSlot({initialData}){
    const baseValue = {slots:[
        {level:1, amount:2,used: 0},
        {level:2, amount:1,used: 0},
    ]}
    const [editMode,setEditMode] = useState(false);
    const [slots,setSlots] = useState(initialData? JSON.parse(initialData).slots : baseValue.slots);
    useEffect(()=>{
        Cookie.set("spellsData",JSON.stringify({slots: slots}))
    },[slots])

    function reset(){
        setSlots(baseValue.slots);
    }
    function useSpell(level){
        let state = slots;
        if(state[level-1].amount > state[level-1].used){
            state[level-1].used++;
            setSlots([...state])
        }
    }
    function changeSlotAmount(level,value){
        let state = slots;
        if(state[level-1].amount + value > 0){
            state[level-1].amount += value;
            setSlots([...state])
        }
    }
    function removeSlot(){
        let state = slots;
        state.pop();
        setSlots([...state])
    }
    function addSlot(){
        let state = slots;
        state.push({
            level: state.length + 1,
            amount: 1,
            used: 0
        })
        setSlots([...state])
    }
    return(
        <Container>
            <div className="header">
                <h1>Magias</h1>
                <div className="options">
                    <button onClick={reset}>
                        <FiRefreshCcw size={18}/>
                    </button>
                    <button onClick={()=> setEditMode(!editMode)}>
                        <FiEdit3 size={18}/>
                    </button>
                </div>
            </div>
            {editMode?
                <div className="edit">
                    <h2>Editar Espaços de magia</h2>
                    <div className="">
                        {slots.map((slot)=>{
                            return(
                            <div className="card" key={slot.level}>
                                <p>Level: {slot.level} - Max: {slot.amount}</p>
                                <button onClick={()=>{changeSlotAmount(slot.level,1)}}><FiPlus size={18}/></button>
                                <button onClick={()=>{changeSlotAmount(slot.level,-1)}}><FiMinus size={18}/></button>
                            </div>)
                        })}
                    </div>
                    <div className="buttons">
                        <p>Modificar quantidade de Espaços:</p>
                        <button onClick={removeSlot}><FiMinus size={18}/></button>
                        <button onClick={addSlot}><FiPlus size={18}/></button>
                    </div>
                </div>
            :
            <div className="content">
                {slots.map(slot=>{
                    return(
                        <div className="slotCard" key={slot.level}>
                            <h2 className="levelSlot">{slot.level}</h2>
                            <p>{slot.used}/{slot.amount}</p>
                            <button onClick={()=>useSpell(slot.level)}>Usar</button>
                        </div>
                    )
                })}
            </div>}
        </Container>
    )
}