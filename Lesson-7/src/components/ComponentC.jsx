import React from 'react'
import { useContext } from 'react'
import { Data,Data1 } from '../App'

const ComponentC = () => {
  const name = useContext(Data)
  const age = useContext(Data1)
  return (
    <div>
      my name is {name} and i am {age} years old
    </div>
  )
}

export default ComponentC
