import React from 'react'

const Person = (props) => {
  return (
    <div>
        <p onDoubleClick={props.clicked}>My name na {props.name} and i be {Math.floor(Math.random()*(30 - 18 + 1) + 18)} years old </p>
        <input value={props.name} onChange={props.zeh}></input>
     </div>
  )
}

export default Person