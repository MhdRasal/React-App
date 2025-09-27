import React from 'react';
import Header from './components/Header.jsx';
import './app.css';

function App(){
    const data = "Rasal"
    return (
        <div>
            <h1 style={{color: 'red'}}>Hello World!</h1>
            <Header name={data}/>
        </div>

    )
}
export default App

