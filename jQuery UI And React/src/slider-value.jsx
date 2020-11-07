//This method is a representation of how loose coupling can be achieved
//this way, the component received an CUSTOM event fired and will await for window.event
//and update required

import React from 'react'

class SliderValue extends React.Component {
  constructor(props) {
    super(props)
    this.handleSlide = this.handleSlide.bind(this)
    this.state = {sliderValue: 0}
  }
  handleSlide(event) {
    this.setState({sliderValue: event.detail.ui.value})
  }
  componentDidMount() {
    window.addEventListener('slide', this.handleSlide)
  }
  componentWillUnmount() {
    window.removeEventListener('slide', this.handleSlide)
  }
  render() {
    return (
      <div className="" > Value: {this.state.sliderValue}
      </div>
    )
  }
}

export default SliderValue;