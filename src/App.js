import './App.css';

function App() {
  //create a variable
  const name = 'Dalia';

  //diffrent ternary expression
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello, {2 + 2 + 2 * 8}! @_@</h1>
      
      {//ternary expression:  if name exists
        name ? (
          <>
            <h1>exicute this part of the code</h1>
          </>
        ) : (
            <>
              <h1> otherwise exicute this part of the code</h1>
            </>
        )
      }
    </div>
  );
}

export default App;

