import React, {Component} from 'react';
import './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

class Person extends Component{

  render() {

    console.log("[Person.js] ...rendering")
    return (
      // <div className="Person" style={style}>
      <StyledDiv>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </StyledDiv>
    )
  }

  
}


export default Person;