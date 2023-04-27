import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  imageSize: 90,
};
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]
const listItems = products.map(product=>
  <li key={product.id}>
    {product.title}
  </li>
  )
function App() {
 
  return (
    <>
       <div>
      <h1>Welcome to my app</h1>
      <MyButton />
       <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      /> 
       <ul>{listItems}</ul>
    </div>
      
    </>
  )
}
export default App
