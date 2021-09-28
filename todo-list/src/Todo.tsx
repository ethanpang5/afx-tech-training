import React from "react";

export const Todo: React.FC<{
    title: string,
    complete: boolean
    }> = (props) => {
    return (
        <div className="task">
            <h2>{props.title}</h2>
            <input type="checkbox"/>
            <label>mark complete</label>
            {props.complete ?
                <p>dew it now</p> : <p><del>dew it now</del></p>
            }
        </div>
    );
}