import React from 'react';
import './app.css';

function App(props){
    return (
        <div>
            <h1 style={{color: 'red'}}>Hello World!</h1>
            <p>Hi, {props.name}</p>
        </div>

    )
}
export default App

