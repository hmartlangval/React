
import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component{
    render(){
        return <p>You clicked me {this.props.counter} times</p>
    }
}

export class ButtonControl extends React.Component{
    render(){
        return <button onClick={this.props.handler}>Click to increase count</button>
    }
}

export default Counter;
