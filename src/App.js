import './App.css';

function App() {
  //create a variable
  const name = 'Dalia';

  //diffrent ternary expression
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name: 'World'}! @_@</h1>
    </div>
  );
}

export default App;

