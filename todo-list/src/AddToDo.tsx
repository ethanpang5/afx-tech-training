import React, { useState } from "react";

export const AddToDo: React.FC<{createTask: (a: string) => void}> = (props) => {

    const [input, setInput] = useState('')


    return (
        <form onSubmit={(e) => {
                e.preventDefault()
                props.createTask(input)
            }}>
            <label htmlFor="task">Task</label><br/>
            <input type="text" id="task" onChange={(text) => {setInput(text.target.value)}}/><br/>
            <input type="submit"/>
        </form>
        
    );
}