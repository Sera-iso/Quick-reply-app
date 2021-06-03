import React from "react";
import "./MessageDisplay.css";

export default function MessageDisplay({content}) {
 
    return (
        <div className="MessageDisplay">
            <p>
                {content}
            </p>
        </div>
    )
}