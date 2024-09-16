import './App.css';


{/*here Person is a component*/}
const Person = () => {
  return (
    <>
      <h1>First Name: Dalia</h1>
      <h1>Last Name: Makhmal</h1>
      <h1>Age: 20</h1>
    </>
  )
}


const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/*And we can call the component*/}
      <Person/>   
      <Person/>
      <Person/>
      <Person/>
      <Person/>
    </div>
  );
}

export default App;

