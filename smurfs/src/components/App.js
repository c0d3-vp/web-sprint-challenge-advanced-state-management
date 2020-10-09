import React from "react";
// import "./App.css";
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import Footer from './Footer'

function App(){
  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <h2>WITH REDUX</h2>
      <SmurfForm />
      <br />
      <br />
      <br />
      <SmurfList />
      <Footer />
    </div>
    
  )
}

export default App;