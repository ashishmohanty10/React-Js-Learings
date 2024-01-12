import React from 'react'

const Data = ({email,location,name,img}) => {
  return (
    <div>
      <h1>My name is : {name}</h1>
      <h1>I'm right now in : {location}</h1>
      <h1>and my email id is : {email}</h1>
      <img src={img} alt="" />
    </div>
  )
}

export default Data
