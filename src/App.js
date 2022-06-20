import React, { Component } from "react";
import './App.css';
import Suli from './Person/Person';

class App extends Component {

  state= {
    people: [
      {name: 'Raul', age: 70},
      {name: 'Figo', age: 30},
      {name: 'Carlos', age: 50}
    ],
    showPersons: false
  }
  showPersonsHandler = ()=>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
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
    let people= null
    if (this.state.showPersons){
      people= <div>            
      <Suli name= {this.state.people[0].name} age ={this.state.people[0].age} zeh={this.nameChangeHandler} />
      <Suli name= {this.state.people[1].name} age ={this.state.people[1].age} caleb={()=>this.switchNameHandler('Ronaldo')} />
      <Suli name= {this.state.people[2].name} age ={this.state.people[2].age} />
      <button onClick={this.switchNameHandler.bind(this, 'Joel')}>SWITCH NAME</button>
        </div>
    }
    return (
      <div className="App">
        <h1>
          General Na  React Developer
        </h1>
        <button onClick={this.showPersonsHandler}>SWITCH</button>
        { people
        /* {
          this.state.showPersons ?
          <div>            
        <Suli name= {this.state.people[0].name} age ={this.state.people[0].age} zeh={this.nameChangeHandler} />
        <Suli name= {this.state.people[1].name} age ={this.state.people[1].age} caleb={()=>this.switchNameHandler('Ronaldo')} />
        <Suli name= {this.state.people[2].name} age ={this.state.people[2].age} />
        <button onClick={this.switchNameHandler.bind(this, 'Joel')}>SWITCH NAME</button>
          </div>
          : null
        } */}
      </div>
    )   
  }
}

export default App;
