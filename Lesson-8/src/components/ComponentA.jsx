import React from 'react'
import ComponentB from './ComponentB'
const ComponentA = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <ComponentB name={props.name}/>
    </div>
  )
}

export default ComponentA
