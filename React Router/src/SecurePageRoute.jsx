import React, { Component } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { fakeAuth } from './Login';



//Rest Parameters in React are recipients
//so the definition ...rest indicates that N number of params that is being passed must all stack up into this argument as an ARRAY
//array destructuring - because ""...rest" will store array values we are using "array destructuring" instead of "object destructuring"
//   const [component, children, path] = rest;


//creating an alias of the component property with Upper Case letter
//so that React will know this is of type Component else it will error

const SecurePageRoute = (props) => {
  const location = useLocation(); 
  const {component:SecureComponent, path} = props


  return (
    <Route path="/admin">
        {
            fakeAuth.isAuthenticated === true ? (<SecureComponent />)
            :
              (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
        }
    </Route>
  );
};

SecurePageRoute.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
} 

export default SecurePageRoute;