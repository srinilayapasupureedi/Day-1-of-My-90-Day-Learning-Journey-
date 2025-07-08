import React from 'react';
class UserClass extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.name+"child constructor");
    this.state={
       userInfo:{
        name:"dummy",
        bio:"default"
       }
    };
  }
  async componentDidMount(){
    // console.log(this.props.name+"child component did mount");
    const data=await fetch("https://api.github.com/users/srinilayapasupureedi");
    const json=await  data.json();
    this.setState({
    userInfo: {
    name: json.name,
    bio: json.bio
  }});
};
  componentDidUpdate(){
    console.log("component did update")
  }
  componentWillUnmount(){
    console.log("component will unmounted");
  }

  render(){
    console.log(this.props.name+"child Render");
    // const {name}=this.props;s
    const {name,bio}=this.state.userInfo;
    return(
      <div className="user-card">
          <h2>Name:{name}</h2>
          <h3>Bio:{bio}</h3>
      </div>
    );
  }
}
export default UserClass;