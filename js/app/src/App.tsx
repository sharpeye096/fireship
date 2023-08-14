import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function showSpinner(buttonRef: React.RefObject<HTMLButtonElement>) {
  buttonRef.current!.disabled = true;
  buttonRef.current!.innerHTML = "Counting...";
  console.log("spinner");
}

function hideSpinner(buttonRef: React.RefObject<HTMLButtonElement>, count: number) {
  buttonRef.current!.disabled = false;
  buttonRef.current!.innerHTML = `count is ${count}`;
  
  console.log("spinner disabled");
}


function App() {
  const [count, setCount] = useState(0)
  const buttonRef = React.createRef<HTMLButtonElement>(); 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={buttonRef} onClick={ async () => {
          showSpinner(buttonRef);
          const response = await fetch("http://127.0.0.1:3000/image");
          const json = await response.json();
          setCount((count) => parseInt(json.value));
          hideSpinner(buttonRef, count);
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
