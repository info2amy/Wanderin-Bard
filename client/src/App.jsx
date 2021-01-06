import './App.css';
import React, { useState, useEffect } from 'react'
import { verifyUser } from './services/users'



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)
  
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
