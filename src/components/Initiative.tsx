import { Container } from "@/styles/components/Initiative";
import { useState } from "react";

export default function Initiative({initialData}){
    const baseValue = {
        participants: [
            {
                name: "Frita",
                isEnemy: false,
                initiative: 10,
                priority: 0,
                isAlive: true,
            },
            {
                name: "Cozida",
                isEnemy: true,
                initiative: 5,
                priority: 0,
                isAlive: true,
            },
            {
                name: "Cenoura",
                isEnemy: true,
                initiative: 10,
                priority: 1,
                isAlive: false,
            },
            {
                name: "Batata",
                isEnemy: false,
                initiative: 20,
                priority: 0,
                isAlive: true,
            },
        ],
    }
    const [participants,setParticipants] = useState(initialData ? JSON.parse(initialData): baseValue.participants)
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
            <div className="header">
                <h2>Initiative</h2>
                <button onClick={orderByName}>Order by Name</button>
                <button onClick={orderByInitiative}>Order by initiative</button>
            </div>
            <div className="content">
                {participants.map((participant)=>{
                    return(
                        <div className={`card  ${!participant.isAlive && "dead"}`} key={participant.name}>
                            <span className={`time ${participant.isEnemy ? "enemy" : "player"}`}>O</span>
                            <p>{participant.name}  {participant.initiative}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}