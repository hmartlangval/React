//the plan of this project is to show how event handlers can be passed as arguments 
//from parent to child component

import React from 'react'
import ReactDOM from 'react-dom'
import Counter, {ButtonControl} from './src/script'
import {ButtonControl as BStateless , Counter as CStateless} from './src/stateless_component'

class ParentComponent extends React.Component {
    state = {
        counter: 0
    }

    increaseCount = () => {
        this.setState({counter: ++this.state.counter})
    }

    render(){
        return (
            <div>
                <h1>Using Stateless Components via React.Component</h1>
                <Counter counter={this.state.counter} />
                <ButtonControl handler={this.increaseCount} />

                <br></br>
                <h1>Same functionality by PURE Stateless (function components)</h1>
                <CStateless counter={this.state.counter} />
                <BStateless handler={this.increaseCount} />
            </div>
        )
    }
} 

ReactDOM.render(
    <ParentComponent />,
    document.getElementById('content')
)