import React from "react";
import "./App.css";

// INSTRUCTIONS
// Change this functional component to a class component
// Typing in the inputs should show the right info in Wendy's passport

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Challenge: create a passport for Wendy Sulca</h1>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Nationality" />
          <input placeholder="Place of Birth" />
        </form>
        <div className="passport">
          <h2>Peruvian Republic Passport</h2>
          <div className="flex">
            <img
              className="profile"
              src="https://photo1.allfamous.org/public/people/headshots/wendy-sulca-19960422-allfamous.org-5.jpg"
            />
            <div className="results">
              <div className="flex">
                <p>First Name: </p>
                <p className="value"></p>
              </div>
              <div className="flex">
                <p>Last Name: </p>
                <p className="value"></p>
              </div>
              <div className="flex">
                <p>Nationality: </p>
                <p className="value"></p>
              </div>
              <div className="flex">
                <p>Place of Birth: </p>
                <p className="value"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
