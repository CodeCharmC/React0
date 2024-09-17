import './App.css';
import { useState, useEffect } from 'react';



const App = () => {
  const [counter, setCounter] = useState(0);
  {/*a variable  related to a hook can be changed only by using its own setter function*/}

  useEffect(() => {
    setCounter(100);
  }, [counter]); {/*[] here is a deppendency array*/}

  return (
    <div className='App'>
      <h1>A Counter</h1>
      <button onClick={() => setCounter((prevCount) => (prevCount + 1))}>
        +
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>
        -
      </button>
    </div>
  );
}

export default App;

