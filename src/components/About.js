import User from "./User";
import UserClass from "./UserClass";
import React  from "react";
import UserContext from "../utils/UserContext";

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
        <UserContext.Consumer>
        {/* another way to read userContext */}
        {/* userContext is something which we created */}
        {({loginedUser})=><h5 className="font-bold">{loginedUser}</h5>}
        </UserContext.Consumer>
      <h1>This is the about page</h1>
      <h2>Hope you're doing well</h2>
      <UserClass name="first" location={"anakapalli"} />
    </div>
    );
  }
}

export default About;
