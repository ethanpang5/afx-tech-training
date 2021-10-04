import React, { useState } from "react";

export const AddToDo: React.FC<{
    createTask: (a: string) => void
    }> = (props) => {

    const [input, setInput] = useState('')


    return (
        <>
        <form onSubmit={(e) => {
                e.preventDefault()
                if (input !== '') {
                    props.createTask(input)
                    const inputField = document.getElementById("task") as HTMLInputElement
                    if (inputField !== null) {
                        inputField.value = ''
                    }
                    setInput('')
                }
                
            }}>
            <label htmlFor="task">Task</label><br/>
            <input type="text" id="task" onChange={(e) => {setInput(e.target.value)}}/><br/>
            <input type="submit"/>
        </form>
        </>
    );
}