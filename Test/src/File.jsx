import React from 'react'
import Navbar from './components/Navbar'
import Left from './components/Left'
import Right from './components/Right'

const File = () => {
  return (
    <div>
      <Navbar/>

      <div className='grid grid-cols-2'>
        <Left/>

        <Right/>
      </div>
    </div>
  )
}

export default File
