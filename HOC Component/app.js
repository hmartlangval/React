 
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import PropTypes from 'prop-types' 

{/* <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} /> */}

//Basic concept of HOC is that you have a Decorator type Component- same as any other component, preferable Funcional Component
//which accept a Concrete Component as argument that is modifyable via its Properties
//The HOC component Creates a NEW Component capable of performing whatever UI logic  required to render the expected UI
//And uses the Conrete component when rendering BUT returns itself (NEW COMPONENT) as a RETURN argument to the caller

const HOCUpgradedButton = (Component, refOfUiGen)=> {

  class _MaterialComponent extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        open:false
      }
    }

    //USE the below if the HOC component is a functional component
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };

    // const handleClose = () => {
    //   setOpen(false);
    // };

    open = () =>{
      this.setState({open:true})
    }

    handleClose = () =>{
      this.setState({open:false})
    }

    handleClick =() => {
      if(this.state.open)
        this.handleClose()
      else this.open()
    }

    render(){
      return (
        <div>
          <Component {...{
            onClick: this.handleClick, 
            text:'Click Me: I am dynamic text', 
            style:{padding:'10px', marginTop:'5px', marginBottom:'5px', fontWeight:'bold'}
            }}  />

          <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
        </Dialog>
        </div>
      )
    }
  }

  _MaterialComponent.displayName = 'UpgradedButton'
  return _MaterialComponent;

  
}

const clickHandler = () => {
  alert('This is an alert from standard browser alert box');
}

class SimpleButton extends React.Component{
  render(){
    return <button {...this.props}>Click here</button>
  }
}
class SimpleButtonHOCText extends React.Component{
  render(){
    return <button {...this.props} style={this.props.style}>{this.props.text==null? "Click here": this.props.text}</button>
  }
}

class SimpleLinkButton extends React.Component{
  render(){
    return <div>You can <a href="#!" {...this.props}>Click Here</a> to see the Material Alert Dialog popping up </div>
  }
}

const UpgradedButton = HOCUpgradedButton(SimpleButton); //this returns component
const UpgradedWithTextChanged = HOCUpgradedButton(SimpleButtonHOCText);
const UpgradedLinkButton = HOCUpgradedButton(SimpleLinkButton); //this returns component

ReactDOM.render(
  [
    <SimpleButton onClick={clickHandler} />,
    <UpgradedButton />,
    <UpgradedWithTextChanged />,
    <UpgradedLinkButton />
  ]
  ,document.getElementById('content')
)
  

