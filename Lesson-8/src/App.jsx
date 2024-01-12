// PROPS DRILLING

import React from 'react'
import ComponentA from './components/ComponentA'

const App = () => {

  const name = 'Ashish'
  return (
    <div>
      <ComponentA name={name}/>
    </div>
  )
}

export default App
