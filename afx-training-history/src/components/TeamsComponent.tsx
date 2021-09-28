import React from 'react'
import "../App.css"
import {PersonPositions, Teams} from "../data"
import { PersonComponent } from './PersonComponent'
import { TeamComponent } from './TeamComponent'

export const TeamsComponent: React.FunctionComponent<{
    // changeSpotlight: Function
}> = (props) => {
    var teamIDs: string[] = []
    for (var ID in Teams) {
        teamIDs.push(ID)
    }
    function createTeamComponents(ID: string) {
        return <TeamComponent teamID = {ID}/>
    }
    var teams = teamIDs.map(createTeamComponents)
    return (
        <React.Fragment>
            <h2>Teams</h2>
            <div className="teams">
                {teams}
            </div>
        </React.Fragment>
    )
}