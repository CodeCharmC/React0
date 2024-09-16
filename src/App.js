import './App.css';

{/*props: props allows us to pass data from one component to another dynamically*/}


{/*here Person is a component*/}
const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.firstName}</h1>
      <h1>Last Name: {props.lastName}</h1>
      <h1>Age: {props.age}</h1>
    </>
  )
}


const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/*And we can call the component*/}
      <Person firstName='Dalia' lastName='Makhmal' age='20' />
      {/*Here firstName, lastName and age are props or properties or attributes of this person component*/}
      <Person firstName='Lucy' lastName='Heartfiliya' age='24'/>
      <Person firstName='Erzza' lastName='Scarlet' age='27'/>
      <Person firstName='Windy' lastName='Marvel' age='17'/>
      <Person firstName='Anna' lastName='Heartfiliya' age='345'/>
      <Person firstName='Mavis' lastName='vermilion' age='320'/>
    </div>
  );
}

export default App;

