import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Success extends Component {

    continue = e => {
        e.preventDefault();
        //Process Form here//
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();

        this.props.prevStep();
    };

  render() {

    return (
      <MuiThemeProvider>
        
        <React.Fragment>

        <AppBar title="Title"></AppBar>
       
       <h1>Thank you for your submission</h1>
       <p>you will receive an email soon</p>

        </React.Fragment>  

      </MuiThemeProvider>
    )
  }
}


export default Success
