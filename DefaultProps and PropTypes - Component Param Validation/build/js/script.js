
// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types' 

class Button extends React.Component {
  render() {
    return React.createElement(
      'button',
      { className: 'btn' },
      this.props.buttonLabel
    );
  }
}
Button.defaultProps = { buttonLabel: 'Submit' };
Button.propTypes = {
  handler: PropTypes.func.isRequired,
  title: PropTypes.string,

  //email here is a Custom Validation logic we wrote
  //the validation will check for valid emails and warning will be given in case provided info is not valid email syntax
  email(props, propName, componentName) {
    let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed!');
    }
  }
};

class Content extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handlerClick = () => {
      console.log('button clicked');
    }, _temp;
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Button, { buttonLabel: 'Start', handler: this.handlerClick, title: 'this is valid props supplied', email: 'test@test.com' }),
      React.createElement(Button, { title: 3 })
    );
  }
}

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Content, null)
), document.getElementById('content'));
