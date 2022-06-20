import React, { Component } from "react";
import './App.css';
import Suli from './Person/Person';

class App extends Component {

  state= {
    people: [
      {name: 'Raul', age: 70},
      {name: 'Figo', age: 30},
      {name: 'Carlos', age: 50}
    ]
  }
  switchNameHandler=(serLeaf)=>{
    this.setState({
      people: [
        {name: 'Zidane', age: 27},
        {name: serLeaf, age: 30},
        {name: 'Becham', age: 37}
      ]
    })
  }

  nameChangeHandler=(event)=>{
    this.setState({
      people: [
        {name: event.target.value, age: 27},
        {name: 'Casillas', age: 30},
        {name: 'Kaka', age: 37}
      ]
    })
  }

  render(){ 
    return (
      <div className="App">
        <h1>
          General Don Turn React Developer
        </h1>
        <Suli name= {this.state.people[0].name} age ={this.state.people[0].age} zeh={this.nameChangeHandler} />
        <Suli name= {this.state.people[1].name} age ={this.state.people[1].age} caleb={()=>this.switchNameHandler('Ronaldo')} />
        <Suli name= {this.state.people[2].name} age ={this.state.people[2].age} />


        <button onClick={this.switchNameHandler.bind(this, 'Joel')}>SWITCH</button>
      </div>
    )   
  }
}

export default App;
