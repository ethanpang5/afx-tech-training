import React, { useState } from "react";
import palpatine from "./dew_it.jpeg";


export const Todo: React.FC<{
    title: string
    complete: boolean
    id: number
    deleteTask: (id: number) => void
    key: number
    }> = (props) => {

    const [completed, setCompleted] = useState(props.complete)    

    return (
        <div className="task">
            <h2>{props.title}</h2>
            <input type="checkbox" onChange={() => {setCompleted(!completed)}}/>
            <label>mark complete</label>
            {!completed ?
                <div>
                    <p>dew it now</p>
                    <img src={palpatine} width='50px'/>
                </div> 
                :
                <p><del>dew it now</del></p>
            }
            <button onClick={() => {props.deleteTask(props.id)}}>delete</button>
            
        </div>
    );
}