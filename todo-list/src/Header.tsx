import React from "react";
import palpatine from "./dew_it.jpeg";

export const Header : React.FC<{}> = () => {
    return (
        <header>
            <h1>
                Dew It
            </h1>
            <img src={palpatine} width='200px'/>
        </header>
    );
}