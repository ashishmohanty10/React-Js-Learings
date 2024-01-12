import React from 'react'

const User = ({name,tool}) => {
  return (
    <div>
      <h2>My name is {name}</h2>
      <p>My favourite tools is: {tool}</p>
    </div>
  )
}

export default User
