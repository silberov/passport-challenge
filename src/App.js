import React from "react";
import "./App.css";

// INSTRUCTIONS
// Change this functional component to a class component
// Typing in the inputs should show the right info in Wendy's passport

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

 handleThisText = (e) => {
   const target = e.target;
    const value = target.value
    const name = target.name
   this.setState({
     [name]: e.target.value
    }, () => {
      console.log("state", this.state)
    })

 }

  render() {
    return (
      <div className="App">
        <h1>Challenge: create a passport for Wendy Sulca</h1>
        <form>
          <input name="firstName" placeholder="First Name"  value={this.state.value} onChange={this.handleThisText} />
          <input name="lastName" placeholder="Last Name" value={this.state.value} onChange={this.handleThisText}/>
          <input name="nationality" placeholder="Nationality" value={this.state.value} onChange={this.handleThisText}/>
          <input name="birthPlace" placeholder="Place of Birth" value={this.state.value} onChange={this.handleThisText}/>
        </form>
        <div className="passport">
          <h2>Peruvian Republic</h2>
          <div className="flex">
            <img
              className="profile"
              src="https://photo1.allfamous.org/public/people/headshots/wendy-sulca-19960422-allfamous.org-5.jpg"
            />
            <div className="results">
              <div className="flex">
                <p>First Name:  </p>
                <p className="value">{this.state.firstName}</p>
              </div>
              <div className="flex">
                <p>Last Name: </p>
                <p className="value">{this.state.lastName}</p>

              </div>
              <div className="flex">
                <p>Nationality: </p>
                <p className="value">{this.state.nationality}</p>

              </div>
              <div className="flex">
                <p>Place of Birth: </p>
                <p className="value">{this.state.birthPlace}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
