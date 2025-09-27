function timer(time){
    const value = document.getElementById("time").innerText;
    const newValue = Number(value) + 1;
    document.getElementById("time").innerText = newValue;
    setTimeout(timer, 1000);
    stopTimer(time);
}
export default function App() {
    return (
        <div>
            <h1>Hello Vite + React!</h1>
            <input type="number" placeholder="Enter timer time in seconds" id="timer" />
            <h2>Time: <span id="time">0</span></h2>
            <p>Start editing to see some magic happen :)</p>
             to start timer: <button onClick={timer($('#timer').val())}>Start</button>
        </div>
    )
}