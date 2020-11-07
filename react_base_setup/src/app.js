 
import React from 'react'
import ReactDOM from 'react-dom'
import MyComp from './jsx/script'
 
 
//const s = React.createElement('h1', null, 'this is stupidity')
 
let timer = 5;
var interval = setInterval(()=>{
    timer--;

    if(timer==0)
    {
        clearInterval(interval)
        ReactDOM.render(<h1>YOUR TIME IS UP {timer}</h1>,
            document.getElementById('content'))
    }
    else {
        ReactDOM.render(<MyComp Time={timer}/>,
            document.getElementById('content'))
    }
    
}, 1000);

