import React, { useState } from 'react';
import './App.css';
import {SpotlightComponent} from "./components/SpotlightComponent"
import { BoardComponent } from "./components/BoardComponent";
import { TeamsComponent } from "./components/TeamsComponent";
import { SpotlightProvider } from "./components/SpotlightProvider";

function App() {
  const [spotlight, changeSpotlight] = useState("recv9osfao9kZT21F")
  return (
    <div className="App">
      {/* <SpotlightComponent personID={spotlight} changeSpotlight={changeSpotlight}/>
      <BoardComponent changeSpotlight={changeSpotlight}/>
      <TeamsComponent changeSpotlight={changeSpotlight}/> */}
      <SpotlightProvider>
        <SpotlightComponent/>
        <BoardComponent/>
        <TeamsComponent/>
      </SpotlightProvider>
    </div>
  );
}

export default App;
