//the components in script.jsx are also stateless, but they are declared as standard Component
//which means that anyone can modify the code and update the state of those components anytime later also
//for a PURE STATELESS COMPONENT  and to enforce it, better to use function components like this

import React from 'react'

const Counter = (props)=>{
    return <p>You clicked me {props.counter} times (stateless)</p>
}

const ButtonControl = (props)=>{
    return <button onClick={props.handler}>Click to increase count (stateless)</button>
}

export {
    Counter,
    ButtonControl
}