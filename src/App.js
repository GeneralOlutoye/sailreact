import React, { Component } from "react";
import './App.css';
import Suli from './Person/Person';

class App extends Component {

  state= {
    people: [
      {id: 'one', name: 'Raul', age: 70},
      {id: 'two', name: 'Figo', age: 30},
      {id: 'three', name: 'Carlos', age: 50}
    ],
    showPersons: false
  }
  showPersonsHandler = ()=>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }
  switchNameHandler=(newName)=>{
    this.setState({
      people: [
        {name: 'Zidane', age: 27},
        {name: newName, age: 30},
        {name: 'Becham', age: 37}
      ]
    })
  }

  nameChangeHandler=(event, id)=>{
    const persinIndex= this.state.people.findIndex(p=>{
      return p.id === id
    })
    const persoon= [...this.state.people[persinIndex]]
    persoon.name= event.target.value

    const abiru= [...this.state.people]
    abiru[persinIndex]= persoon

    this.setState({
      abiru:abiru
    })
  }

  nameDeleteHandler= (personindex)=>{
    const osas= this.state.people;
    osas.splice(personindex, 1)
    this.setstate({
      osas: osas
    })
  }

  render(){ 
    const style= {
      backgroundColor: 'rgb(15, 15, 56)',
      color: 'white'
    }
    let people= null

    if (this.state.showPersons){
      people=(
      <div> 
        {this.state.people.map((persons, index)=>{
        return <Suli
          clicked= {()=>this.nameDeleteHandler(index)}
          name= {persons.name}
          age= {persons.age}
          key= {persons.id}
          zeh= {(event)=>this.nameChangeHandler(event, persons.id)}
        />
      })}
      <button onClick={this.switchNameHandler.bind(this, 'Joel')}>SWITCH NAME</button>
      </div>)
      // people= <div>
      // <Suli name= {this.state.people[0].name} age ={this.state.people[0].age} zeh={this.nameChangeHandler} />
      // <Suli name= {this.state.people[1].name} age ={this.state.people[1].age} caleb={()=>this.switchNameHandler('Ronaldo')} />
      // <Suli name= {this.state.people[2].name} age ={this.state.people[2].age} />
      // <button onClick={this.switchNameHandler.bind(this, 'Joel')}>SWITCH NAME</button>
        // </div>

        style.backgroundColor= 'red'
    }
    let clasess = []
    if(this.state.people.length <=2){
      clasess.push('red')
    }
    if(this.state.people.length <=1){
      clasess.push('bold')
    }
    if(this.state.people.length <1){
      clasess.push('wahala')
    }
    return (
      <div className="App">
        <h1> 
          General Na React Developer
        </h1>
        <p className={clasess.join(' ')}>Today's task</p>
        <button style={style} onClick={this.showPersonsHandler}>SWITCH</button>
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
