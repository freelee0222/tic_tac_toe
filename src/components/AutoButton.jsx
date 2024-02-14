import React from 'react';
import '../styles/AutoButton.css';

const AutoButton = (props) => {
    return (
        <>
            <button className="auto-button" onClick={props.autoGo}>Auto Move</button>
            <small>Click here to automate the next move.</small>
        </>
    );
}


export default AutoButton;