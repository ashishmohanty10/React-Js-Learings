// MAPPING THROUGH ARRAY OBJECTS

import './App.css'
import Add from './components/Add'
// const specialClass = 'not-simple-class'
// const myName = 'Ashish';
// const multiply = (a,b) => a*b

const userInfo = [
  {
    userName:'Ashish',
    email:'email@email.com',
    location:'India'
  },

  {
    userName:'Surjo',
    email:'email@email.com',
    location:'India'
  },

  {
    userName:'Suman',
    email:'email@email.com',
    location:'India'
  },
]

function App() {
  
  return (
    <> 
      {/* <p>{myName}</p>
      <p>My friends List:{['Surjo','Suman','Aritra']}</p>
      <p>{multiply(2,2)}</p>
      <p className={specialClass}>Helloooooooooo</p> */}

      {userInfo.map((user)=>(
        <ul key={Math.random()*1}>
          <li>{user.userName}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}

    </>
  )
}


export default App
