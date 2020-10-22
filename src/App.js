import React from "react";
import "./App.css";

// INSTRUCTIONS
// Change this functional component to a class component
// Typing in the inputs should show the right info in Wendy's passport

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "",
    lastName: "",
    nationality: "",
    birthPlace:""
  }
  }

   handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value},()=>{
      console.log("my state:", this.state)
    });
    //console.log(event.target.value);
    //console.log(event.target.name);
  }

  

  render() {
    return (
      <div className="App">
        <h1>Challenge: create a passport for Wendy Sulca</h1>
        <form>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
          <input type="text" name="nationality" placeholder="Nationality" onChange={this.handleChange} />
          <input type="text" name="birthPlace" placeholder="Place of Birth" onChange={this.handleChange} />
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
                <p>First Name:</p>
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
