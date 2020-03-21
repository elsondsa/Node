import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Controlpage from "./Controlpage";

class Loginpage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name : 'admin',
       pass : 'admin'
    }
  }

  handleClick(){
    alert('dead');
  }
  

  render() {
    return (
      <div>
        <form enctype='application/json' method='POST' action='http://localhost:3001/api/details'>
          <input type="text" name="name" id="name" />
          <br/>
          <input type="text" name="password" id="password"/>
          <input type="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default Loginpage;