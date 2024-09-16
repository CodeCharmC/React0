import './App.css';
import { useState } from 'react';

{/*react-state: a plain JS object used by the React component to represent a piece of information about the current state of the component. it is complately managed by the React component itself.*/ }
{/*whenever we call something as a function  and it starts with 'use', it's a hook*/ }


const App = () => {
  {/*a concept of array destructuring
  const [name Of The State, set Function Of The State or Setterfunction] = useState();*/}
  const [counter, setCounter] = useState();
  return (
    <div className="App">
      <h1>A Counter</h1>
      <button>+</button>
      <h1>{counter}</h1>
      <button>-</button>
    </div>
  );
}

export default App;

