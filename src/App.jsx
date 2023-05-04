import CustomButton from "./components/CustomButton";
import React, { useState,useEffect } from 'react';


import "./App.css";
import Button from "./common/CustomButton";

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);



  async function getList(){
    setLoading(true)
    try {
      const response = await fetch('https://dummyjson.com/users',{
        method : "GET"
      })
    
      if (response.status === 200){
        const user = await response.json();
        setUsers([... await user.users])
          }else{
        setUsers([])
      }
      setLoading(false)
    } catch (error) {
     console.error("list error",error)
    }
    setLoading(false)
  }

  useEffect(() => {
    (async function(){
      await getList();
    })();
  }, []);

if(loading)return(<h1>loading...</h1>)
  return (
    
    <div>
        {users.map((user) => (
        <div key={user.id} >        
            <h2 className="card-title">{user.maidenName}</h2>
            <p className="card-text">{user.email}</p>
            <Button/>
      
        </div>
      ))}

    </div>
  );
  
}
export default App;
