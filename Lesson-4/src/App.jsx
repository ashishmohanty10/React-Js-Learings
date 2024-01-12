// EVENT HANDLING

import React from 'react'

const App = () => {
  return (
    <Movie/>
  )
}

const Movie =()=>{
  const movehandler = ()=>{
    // alert('U hovered over me 🤣')
    console.log('U hovered over me 🤣')
  }
  return <>
    <p onMouseMove={movehandler}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, repudiandae a? Enim dolore officia eius voluptate? Qui obcaecati impedit at.</p>
  </>
}

export default App
