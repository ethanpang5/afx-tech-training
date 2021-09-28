/* 
Here, we give you a full list of imports that you should encounter
throughout this project (no component imports, given that this is our base component). 
However, in future components, we expect that you import only the components + data that you need!
*/
import { stringify } from 'querystring'
import React, { useState } from 'react'
import "../App.css"
import { People, PersonPositions, Teams, Boards } from '../data'
import {Team, PersonPosition, Person, Attachment, Board} from '../types'
import { ChangeSpotlight } from './SpotlightProvider'

export const PersonComponent: React.FunctionComponent<{
    // Any prop definitions go here
    personPosition: PersonPosition
    // changeSpotlight: Function
}> = (props) => {
    // Any component logic goes into the body 
    // Access specific prop by using props.[name]
    const personID = props.personPosition["personIds"][0];
    const person: Person = People[personID]
    const {setCurrentSpotlightID} = ChangeSpotlight();
    
    return (
        <React.Fragment>
        <div className="person" onClick={() => {setCurrentSpotlightID(personID)}}>
            <div className="member--img">
                <img
                    className="board--img"
                    src={props.personPosition["picture"][0]["url"]}
                    width= "200px"
                    height= "200px"
                    
                />
            </div>
            <div className="member-info">
                <div className="name">{person["name"]}</div>
                <div className="title">{props.personPosition["positionTitle"]}</div>
            </div>
        </div>
        </React.Fragment>
    )
}