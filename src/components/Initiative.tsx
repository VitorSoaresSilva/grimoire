import { Container, Card } from "@/styles/components/Initiative";
import { CardHeader } from "@/styles/components/Utils";
import { useEffect, useState } from "react";
import { FiArrowRight, FiCircle, FiEdit3, FiPlus, FiEdit2, FiRefreshCcw, FiUser, FiUserX } from "react-icons/fi";
import Cookies from 'js-cookie';

interface IParticipant{
    name: string;
    isEnemy: boolean;
    isAlive: boolean;
    priority:number;
    initiative: number;
}
interface ITurn{
    players: number;
    enemys: number;
    curIndex: number;
}

export default function Initiative({initialData}){
    const baseValue = {participants: [],turn: {curIndex: -1, enemys: 0, players: 0} as ITurn};
    const [participants,setParticipants] = useState<IParticipant[]>(initialData ? JSON.parse(initialData).participants: baseValue.participants)
    const [turn, setTurn] = useState<ITurn>(initialData ? JSON.parse(initialData).turn: baseValue.turn)
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
    function addParticipant(){
        let state = participants;
        if(state.some(p => p.name == nameInput) || nameInput.length < 1){
            alert("Participante invalido")
            resetInputAddParticipant();
            return;
        }
        state.push({name: nameInput, isEnemy: isEnemyInput,priority:0,isAlive: true,initiative: 0})
        setParticipants([...state]);
        resetInputAddParticipant();
    }
    function handleChange(index,e){
        let state = participants
        state[index][e.target.name] = e.target.type === "checkbox" ? e.target.checked : e.target.value 
        setParticipants([...state])
    }
    useEffect(() => {
        Cookies.set('initiativeData', JSON.stringify({participants: participants, turn: turn}))
    },[participants,turn]);

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
    function removeEnemys(){
        let state = participants;
        state = state.filter(e => !e.isEnemy)
        setParticipants([...state])
    }
    async function startTurn(){
        await orderByInitiative();
        await setEditMode(false);
        let state = participants;
        if(state.length < 2){
            alert('Adicione mais participantes');
            return;
        }
        let playerCount = 0, enemyCount = 0;
        for (let i = 0; i < state.length; i++) {
            state[i].isAlive = true;
            playerCount += Number(!state[i].isEnemy)
            enemyCount += Number(state[i].isEnemy)
        }
        let newTurn = baseValue.turn;
        newTurn.enemys = enemyCount;
        newTurn.players = playerCount;
        newTurn.curIndex = 0;
        setTurn({...newTurn});
        setParticipants([...state])
    }
    function nextOnTurn(){
        let newTurn = turn;
        for (let i = 0; i < participants.length; i++){
            let nextIndex = (newTurn.curIndex + 1 + i) % participants.length;
            if(participants[nextIndex].isAlive){
                turn.curIndex = nextIndex;
                setTurn({...newTurn});
                return;
            }
        }
        alert('Ninguem vivo');
        return;
    }
    function setAsDead(index){
        let state = participants
        state[index].isAlive = false;
        setParticipants([...state])
    }
    function endTurn(){
        resetIniciative();
        removeEnemys();
        setTurn(baseValue.turn);
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
                <button onClick={startTurn}>Start turn</button>
                <button onClick={nextOnTurn}>next on turn</button>
                <button onClick={endTurn}>end turn</button>
                <button onClick={removeEnemys}>Remove enemys</button>
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
                                    <td><input type="text" name="initiative" value={participant.initiative} onChange={(e)=>handleChange(index,e)}/></td>
                                    {participants.some((p) => participant.initiative && p.name !== participant.name && p.initiative === participant.initiative) ? 
                                        <td><input type="text" name="priority" value={participant.priority} onChange={(e)=>handleChange(index,e)}/></td>
                                    : <td></td>}
                                    <td><input type="checkbox" name="isEnemy" checked={participant.isEnemy} onChange={(e)=>handleChange(index,e)}/></td>
                                </tr>
                            )
                        })}
                    </tbody>    
                </table>


                <div className="add">
                    <form onSubmit={(e)=>{e.preventDefault(); addParticipant()}}>
                        <input type="text" placeholder="Nome" value={nameInput} onChange={(e)=>setNameInput(e.target.value)}/>
                        <button type="submit"><FiPlus size={18}/></button>
                    </form>
                </div>
            </div> :
            

            <div className="content">
                {participants.map((participant,index)=>{
                    return(
                        <Card className={`${participant.isAlive ? "" : "dead"}`} key={participant.name}>
                            {index === turn.curIndex && <span><FiArrowRight size={18}/></span>}
                            <span className={`time ${participant.isEnemy ? "enemy" : "player"}`}></span>
                            <p>{participant.name} - {participant.initiative}</p>
                            <button type="button" onClick={()=>setAsDead(index)}><FiUserX size={18}/></button>
                        </Card>
                    )
                })}
            </div>}
        </Container>
    )
}