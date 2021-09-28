import React from 'react'
import "../App.css"
// Hint: import PersonComponent here; it might be useful :)
import {PersonComponent} from "./PersonComponent"
import { PersonPositions, Teams } from '../data'
import { Team } from '../types'

export const TeamComponent: React.FunctionComponent<{
    teamID: string
    // changeSpotlight: Function
}> = (props) => {
    const team: Team = Teams[props.teamID]
    const positionsIds: string[] = team["positionIds"]
    function createPersonComponents(ID: string) {
        const personPosition = PersonPositions[ID]
        return <PersonComponent personPosition={personPosition}/>
                                // changeSpotlight={props.changeSpotlight}/>
    }
    var directors = positionsIds.map(createPersonComponents)
    return (
        <React.Fragment>
            <div className="team">
                <div>
                    <div className="team--name">{team["name"]}</div>
                    <div className="team--pic">
                        <img
                            src={team["teamPicture"][0]["url"]}
                            width="600px"
                            height="375px"
                        />
                    </div>
                </div>
                <div className="directors">
                    {directors}
                </div>
            </div>
        </React.Fragment>
    )
}