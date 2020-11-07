//this file show how the jQuery slider UI can be implemented in React with tight coupling
//the react component speaks directly to the jquery methods and calls the events directly

import React from 'react'

class SliderButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {sliderValue: 0}
    this.handleSlide = this.handleSlide.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSlide(event, ui) {
    this.setState({sliderValue: ui.value})
  }
  handleChange(value) {
    return ()=> {
      $('#slider').slider('value', this.state.sliderValue + value)
      this.setState({sliderValue: this.state.sliderValue + value})
    }
  }
  componentDidMount() {
    $('#slider').on('slide', this.handleSlide)
  }
  componentWillUnmount() {
    $('#slider').off('slide', this.handleSlide)
  }
  render() {
    return <div>
      <button disabled={(this.state.sliderValue<1) ? true : false}
        className="btn default-btn"
        onClick={this.handleChange(-1)}>
          1 Less ({this.state.sliderValue - 1})
      </button>
      <button disabled={(this.state.sliderValue>99) ? true : false}
        className="btn default-btn"
        onClick={this.handleChange(1)}>
          1 More ({this.state.sliderValue + 1})
      </button>
    </div>
  }
}

export default SliderButtons;