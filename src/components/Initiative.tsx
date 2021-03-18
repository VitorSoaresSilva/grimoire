import { Container, Card } from "@/styles/components/Initiative";
import { CardHeader } from "@/styles/components/Utils";
import { useEffect, useState } from "react";
import { FiCircle, FiEdit3, FiPlus, FiRefreshCcw, FiUser } from "react-icons/fi";
import Cookies from 'js-cookie';

export default function Initiative({initialData}){
    const baseValue = {
        participants: [],
    }
    const [participants,setParticipants] = useState(initialData ? JSON.parse(initialData): baseValue.participants)
    const [editMode, setEditMode] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [isEnemyInput, setIsEnemyInput] = useState(false);
    function orderByName(){
        let state = participants;
        state.sort((a, b) => (a.name > b.name) ? 1 : -1)
        setParticipants([...state]);
    }
    function orderByInitiative(){
        let state = participants;
        state.sort((a, b) => (a.initiative < b.initiative) ? 1 : (a.initiative == b.initiative) ? 
        ((a.priority < b.priority) ? 1 : -1): -1)
        setParticipants([...state]); 
    }
    function addParticipant(e){
        let state = participants;
        if(state.some(p => p.name == nameInput)){
            alert("Participante já existe")
            return;
        }
        state.push({name: nameInput, isEnemy: isEnemyInput,priority:0,isAlive: true,initiative: 0})
        setParticipants([...state]);
        resetInputAddParticipant();
    }
    function handleChange(index,value,prop){
        let state = participants
        state[index][prop] = value;
        setParticipants([...state])
    }
    useEffect(() => {
        Cookies.set('initiativeData', JSON.stringify(participants))
    },[participants]);

    function resetAll(){
        setParticipants(baseValue.participants);
        resetInputAddParticipant();
    }
    function resetInputAddParticipant(){
        setNameInput("");
        setIsEnemyInput(false);
    }
    function resetIniciative(){
        let state = participants;
        for (let i = 0; i < state.length; i++) {
            state[i].initiative = 0;
            state[i].priority = 0;
        }
        setParticipants([...state])
        setEditMode(true);
        orderByName();
    }
    /**
     * add participant
     *  - name, isEnemy
     * 
     * add function to reset initiative 
     *  - reset initiative and priority value
     * 
     * start turn
     *  - mark the first one
     *  - button do kill 
     */
    return(
        <Container>
            <CardHeader className="header">
                <h2>Initiative</h2>
                <button onClick={orderByName}>Order by Name</button>
                <button onClick={orderByInitiative}>Order by initiative</button>
                <button onClick={resetIniciative}>Reset initiative</button>
                <div className="options">
                    <button onClick={resetAll}>
                        <FiRefreshCcw size={18}/>
                    </button>
                    <button onClick={()=> setEditMode(!editMode)}>
                        <FiEdit3 size={18}/>
                    </button>
                </div>
            </CardHeader>
            {editMode?
             
            <div className="edit">
                <h2>edit</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Iniciativa</th>
                            <th>Prioridade</th>
                            <th>Enemy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants.map((participant,index)=>{
                            return(
                                <tr className="inputs" key={participant.name}>
                                    <td>{participant.name}</td>
                                    
                                    <td><input type="text" value={participant.initiative} onChange={()=>handleChange(index,participant.initiative,'initiative')}/></td>
                                    {console.log(participants.some((p) =>p.name !== participant.name && p.initiative === participant.initiative))}
                                    {participants.some((p) => participant.initiative && p.name !== participant.name && p.initiative === participant.initiative) ? 
                                        <td><input type="text" value={participant.priority} onChange={()=>handleChange(index,participant.priority,'priority')}/></td>
                                    : <td></td>}
                                    <td><input type="checkbox" checked={participant.isEnemy} onChange={()=>handleChange(index,participant.isEnemy,'isEnemy')}/></td>
                                </tr>
                            )
                        })}
                    </tbody>    
                </table>


                <div className="add">
                    <form onSubmit={(e)=>{e.preventDefault(); addParticipant(e)}}>
                        <input type="text" placeholder="Nome" value={nameInput} onChange={(e)=>setNameInput(e.target.value)}/>
                        <label htmlFor="isEnemyInput">Inimigo?</label>
                        <input type="checkbox" id="isEnemyInput" checked={isEnemyInput} onChange={(e)=>{setIsEnemyInput(e.target.checked)}}/>
                        <button type="submit"><FiPlus size={18}/></button>
                    </form>
                </div>
            </div> :
            

            <div className="content">
                {participants.map((participant)=>{
                    return(
                        <Card className={`card  ${!participant.isAlive && "dead"}`} key={participant.name}>
                            <span className={`time ${participant.isEnemy ? "enemy" : "player"}`}></span>
                            <p>{participant.name} - {participant.initiative}</p>
                        </Card>
                    )
                })}
            </div>}
        </Container>
    )
}