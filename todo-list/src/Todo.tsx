import React, { useEffect, useState } from "react";

export const Todo: React.FC<{
    title: string
    complete: boolean
    id: number
    deleteTask: (id: number) => void
    }> = (props) => {

    const [completed, setCompleted] = useState(props.complete)
    let ID = 0
    useEffect(() => {ID = props.id}, [])
    

    return (
        <div className="task">
            <h2>{props.title}</h2>
            <input type="checkbox" onChange={(e) => {setCompleted(!completed)}}/>
            <label>mark complete</label>
            {!completed ?
                <p>dew it now</p> : <p><del>dew it now</del></p>
            }
            <button onClick={(e) => {props.deleteTask(ID)}}>delete</button>
        </div>
    );
}