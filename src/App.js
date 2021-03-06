import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
        { name:"Max", age:"28"},
        { name:"Manu", age:"29"},
        { name:"Stephanie", age:"26"}
    ],
    otherState:'Some other state'
    };

  switchNameHandler = () => {
      console.log("Was clicked!!");
      this.setState ( {
        persons: [
            { name:"Max!!", age:"28"},
            { name:"Manu", age:"29"},
            { name:"Stephanie", age:"27"}
        ]  } );
  }
  
  
  render() {
    return (
      <div className="App">
        <h1> App</h1>
        <button onClick={this.switchNameHandler}> Switch Name </button>
        <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
        <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
      </div>
     //return React.createElement( 'div',{ className:"App" }, React.createElement( 'h1',null, "Hi, I'm a React App") );
    );
  }
}

export default App;
