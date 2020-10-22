import React from "react";
import "./App.css";

// INSTRUCTIONS
// Change this functional component to a class component
// Typing in the inputs should show the right info in Kanye's passport

function App() {
  return (
    <div className="App">
      <form>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Nationality" />  
        <input placeholder="Place of Birth" />
      </form>
      <div className="passport">
        <h2>Kanye's Passport</h2>
        <div className="flex">
          <img
            className="profile"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg/1200px-Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg"
          />
          <div className="results">
            <div className="flex">
              <p>First Name: </p>
            </div>
            <div className="flex">
              <p>Last Name: </p>
            </div>
            <div className="flex">
              <p>Nationality: </p>
            </div>
            <div className="flex">
              <p>Place of Birth:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
