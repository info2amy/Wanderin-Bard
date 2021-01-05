import './App.css';
import { verifyUser } from './services/users'
import { Route, Switch, Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Add from './screens/Add/Add'
import Detail from './screens/Detail/Detail'
import Landing from './screens/Landing/Landing'
import Listing from './screens/Listing/Listing'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'

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
      <Switch>
      <Route exact path="/">
          <Landing user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/products">
          <Listing user={user} />
        </Route>
        <Route path="/add-product">
          {user ? <Add user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/products/:id/edit">
          {user ? <ProductEdit user={user} /> : <Redirect to='/' />}
        </Route>
        <Route exact path="/products/:id">
          <Detail user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
