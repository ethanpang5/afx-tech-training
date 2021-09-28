import React from 'react'
import { Boards, PersonPositions } from '../data'
import {Board} from '../types'
import {PersonComponent} from './PersonComponent'
// Hint: import PersonComponent here; it might be useful :)

export const BoardComponent: React.FunctionComponent<{
    // Any prop definitions go here
    // changeSpotlight: Function
}> = (props) => {
    // Any component logic goes into the body 
    // Access specific prop by using props.[name]
    const board: Board = Boards["recqeqsYTuU8E5BlY"]
    const positionsIds: string[] = board["positionIds"]

    function createPersonComponents(ID: string) {
        const personPosition = PersonPositions[ID]
        return <PersonComponent personPosition={personPosition}/>
        // changeSpotlight={props.changeSpotlight}/>
    }

    var personComponents = positionsIds.map(createPersonComponents)
    return (
        <React.Fragment>
            <h2>Board</h2>
            <div className="board">
                {personComponents}
            </div>
        </React.Fragment>
    )
}