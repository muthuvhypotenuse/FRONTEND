import { useState } from 'react'
import './App.css'
import { User,concatStrings } from './common'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState<User>({
    name: "muthu",
    age: 25
  })

  console.log(concatStrings('Hello'))
  console.log(concatStrings('hello','world'))


  return (
    <>
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>      
    </div>

    </>
  )
}

export default App
