import React from 'react'
import ReactDOM from 'react-dom'
import {Fruits} from './src/Fruits'
import Login from './src/Login'

import {BrowserRouter,HashRouter, Route, Link} from 'react-router-dom'
import SecurePageRoute from './src/SecurePageRoute'
 
const Home = ()=>{
  return <h1>Home</h1>
}
const About = ()=>{
  return <h1>About</h1>
}
const Contact = ()=>{
  return <h1>Contact</h1>
}

const Admin = ()=>{
  return <h1>Welcome to Administration page</h1>
}



class RouterTest extends React.Component {
  render(){
    return (
      <div>

        <ul>
          <li>
            {/* Note that <Link> are  just like <a> in HTML. Their only difference is that they will not reloaod the page on location change */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Fruits">Fruits</Link>
          </li>
          <li>
            <Link to="/Admin">Administration</Link>
          </li>
        </ul>
        
        
        

{/* When any of the above links are clicked, if any of the paths in the below <Route>s matches, it will show the corresponding component */}
        <Route exact path="/" component={Home} />

        { /* it works this way also */}
        <Route path="/about"><About /></Route> 

        <Route path="/contact" component = {Contact} />

        <Route path="/fruits"><Fruits /></Route>

        <SecurePageRoute path="/admin" component={Admin}></SecurePageRoute>

        <Route path="/login">
          <Login />
        </Route>
 

        {/* Components defined in ROUTES are the components that gest displayed when the router path matches */}

        {/* remember to use SWITCH in case you found that there can be multiple routes that can satisfy the given url/path
          SO THAT only the FIRST item that matches the pattern will be processed;
        
        <switch>
          <route></route> 
          <route></route>
        </switch> */}
        
      </div>
    )
  }
}


ReactDOM.render(
  <HashRouter>
    <RouterTest />
  </HashRouter>
  , document.getElementById('content'))