import './App.css';

function App() {
  //create a variable
  const name = 'Dalia';

  //diffrent ternary expression
  const isUserLoggedIn = false;
  return (
    <div className="App">
      <h1>Hello, {2 + 2 + 2 * 8}! @_@</h1>
      
      {//ternary expression:
        name ? (
          <>
            <h1>{name}</h1>
              {//ternary expression:
                isUserLoggedIn ? (
                  <>
                    <h1>{name} is logged in</h1>
                  </>
                ) : (
                    <>
                      <h1>{name} is not logged in !_!</h1>
                      <h6>Thank you</h6>
                    </>
                )
              }
          </>
        ) : (
            <>
              <h1>There is no name !_!</h1>
              <h6>Thank you</h6>
            </>
        )
      }
    </div>
  );
}

export default App;

