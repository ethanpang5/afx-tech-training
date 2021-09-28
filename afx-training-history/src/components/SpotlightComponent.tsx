import React, { useContext } from 'react'
import "../App.css"
import {Person} from '../types'
import {People, PersonPositions} from '../data'
import { PersonComponent } from './PersonComponent'
import { ChangeSpotlight } from './SpotlightProvider'

export const SpotlightComponent: React.FunctionComponent<{
    // personID: string
    // changeSpotlight: Function
}> = (props) => {
    // const person: Person = People[props.personID]
    
    // const personID = useContext(SpotlightContext);
    const { currentSpotlightID, setCurrentSpotlightID } = ChangeSpotlight();
    const person = People[currentSpotlightID];
    
    const positionIds: string[] = person["positionIds"]

    function createPersonComponents(ID: string) {
        const personPosition = PersonPositions[ID]
        return <PersonComponent personPosition={personPosition}/>
                                // changeSpotlight={setCurrentSpotlightID}/>
    }
    var personComponents = positionIds.map(createPersonComponents)
   
    return (
        <React.Fragment>
            <h2>Spotlight</h2>
            <div className="spotlight">
                {personComponents}
            </div>
        </React.Fragment>
    )
}