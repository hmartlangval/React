 
// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types' 

class Button extends React.Component {
  render() {
    return <button className="btn" >{this.props.buttonLabel}</button>
  }
}
Button.defaultProps = {buttonLabel: 'Submit'}
Button.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string,

  //email here is a Custom Validation logic we wrote
  //the validation will check for valid emails and warning will be given in case provided info is not valid email syntax
  email(props, propName, componentName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      if (!emailRegularExpression.test(props[propName])) {
        return new Error('Email validation failed!')
      }
  }
}


class Content extends React.Component {

  handlerClick = () => {
    console.log('button clicked');
  }

  render() {
    return (
      <div>
        <Button buttonLabel="Start" handler={this.handlerClick} title="this is valid props supplied" email="test@test.com"/>

        <Button title={3}/>
        
        {
          /*
          Below are testing codes, uncomment them to see the type of warning messages you get
          */
        } 

        {/* <Button />
        <Button title={3}/>
        <Button title="this is valid title" />
        <Button />
        <Button email="not-a-valid-email"/>
        <Button email="validemail@email.co"/> */}
      </div>
      )
    }
}


ReactDOM.render(
    <div>
      <Content /> 
    </div>,
    document.getElementById('content')
  )
  

