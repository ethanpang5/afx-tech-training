import React, { createContext, useContext, useState } from 'react';

export interface SpotlightContextInterface {
  currentSpotlightID: string
  setCurrentSpotlightID: (id: string) => void
}

export const SpotlightContext = createContext({
  currentSpotlightID: "recv9osfao9kZT21F",
  setCurrentSpotlightID: (id: string) => {},
})

export const SpotlightProvider: React.FunctionComponent = (props) => {
    const [spotlightID, setSpotlightID] = useState("recv9osfao9kZT21F");

    const spotlightValue = React.useMemo(() => {
      return {
        currentSpotlightID: spotlightID,
        setCurrentSpotlightID: setSpotlightID,
      }
    }, [spotlightID, setSpotlightID])

    return (
        <SpotlightContext.Provider value={spotlightValue}>
            {props.children}
        </SpotlightContext.Provider>  
    )
}

export const ChangeSpotlight = () => useContext(SpotlightContext)