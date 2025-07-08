import User from "./User";
import UserClass from "./UserClass";
import React  from "react";

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("I AM inside componentdid mounted ");
  }
  render(){
    console.log("render Constructor");
    return(
      <div>
      <h1>This is the about page</h1>
      <h2>Hope you're doing well</h2>
      <UserClass name="first" />
      <UserClass name="second" />
    </div>
    );
  }
}

export default About;
