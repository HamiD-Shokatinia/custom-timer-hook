// import { useState } from "react";
import "./App.css";
import { useTimer } from "./hooks/timer.hook";

function App() {
  const timer = useTimer(10);
 

  return (
    <div className="App">
      
      <div>
        Timer: {timer.value}
      </div>
      <div>
        Is Timer done?: {timer.isDone ? "Yes" : "Not Yet"}
      </div>
      <button type="button" onClick={() => timer.start()}>
        Start Timer
      </button>
      <button type="button" onClick={() => timer.stop()}>
        Stop Timer
      </button>
      <button type="button" onClick={() => timer.reset()}>
        Reset Timer
      </button>
    </div>
  );
}

export default App;
