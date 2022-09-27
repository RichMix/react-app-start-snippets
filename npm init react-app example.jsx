npm init react-app example

// cd example, npm start

function Heading() {
    return (
      <h1>This is a h1 heading. </h1>
    )
  }
  
  function App() {
    return (
      <div className="App"> 
        This is the starting code for "Your first component" ungraded lab 
        <Heading /> 
      </div> 
    ); 
  }

  export default App;