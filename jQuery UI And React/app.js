//the plan of this project is to show how event handlers can be passed as arguments 
//from parent to child component

import React from 'react'
import ReactDOM from 'react-dom'

import SliderValue from './src/slider-value'
import SliderButtons from './src/slider-buttons'


ReactDOM.render(
    <div>
      <SliderValue />
      {/* <SliderButtons/> */}
    </div>,
    document.getElementById('content')
  )
  

