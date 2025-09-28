import React from 'react';
import { useState } from 'react';
import Counter from './components/counter.jsx';
import './app.css';


function App(props){
    const [count, setCount] =useState(0)
    const addCount = () => {
        setCount(count + 1)
        console.log(count);
    }
    let obj ={
        title: "1st counter",
        count
    }
    return (
        <div>
            <h1 style={{color: 'red'}}>Hello World!</h1>
            <Counter {...obj}/>
            <button onClick={addCount}>Click Me</button>
        </div>
    )
}
export default App

