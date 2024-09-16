import './App.css';

function App() {
  //create a variable
  const name = 'Dalia';

  //diffrent ternary expression
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello, {2 + 2 + 2 * 8}! @_@</h1>
      
      {//ternary expression:
        name ? (
          <>
            <h1>{name}</h1>
          </>
        ) : (
            <>
              <h1>There is no name</h1>
              <h6>Thank you</h6>
            </>
        )
      }
    </div>
  );
}

export default App;

