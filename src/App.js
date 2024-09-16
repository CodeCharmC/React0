import './App.css';
import { useState } from 'react';

{/*react-state: a plain JS object used by the React component to represent a piece of information about the current state of the component. it is complately managed by the React component itself.*/ }
{/*useState: a hook that lets you add state to a functional component*/ }
{/*whenever we call something as a function  and it starts with 'use', it's a hook*/ }

{/*events: some kind of system generated event */ }

{/*a call-back function: a function that simply does not have a name, its there and its waiting for some kind of command*/ }

const App = () => {
  {/*a concept of array destructuring
  const [name Of The State, set Function Of The State or Setterfunction] = useState();*/}
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <h1>A Counter</h1>
      <button
        onClick={() => setCounter((prevCount) => (prevCount + 1))}>{/*Another call-back function inside the setterfunction setCounter; change the state*/}
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

