import React from 'react';
class UserClass extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.name+"child constructor");
    this.state={
       count:0,
    };
  }
  componentDidMount(){
    console.log(this.props.name+"child component did mount");
  }

  render(){
    console.log(this.props.name+"child Render");
    const {name}=this.props;
    const {count}=this.state;
    return(
      <div className="user-card">
          <h1>count:{count}</h1>
          <button onClick={()=>{
            this.setState({
              count:this.state.count+2,
            })
          }}>countIncrease</button>
          <h2>Name:{name}</h2>
          <h3>Location:Anakapalli</h3>
      </div>
    );
  }
}
export default UserClass;