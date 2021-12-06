import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {//a state is a set of data that an individual Component can hold
      planet: "earth"
    };
    console.log("Hey I am from constructor");
  }

componentDidMount() {
  this.setState({planet: "Mars"});
  console.log("Hey I am from componentDidMount");
}

  render() {//logic
    console.log("Hey I am from rendered");
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h4>{this.props.description}</h4>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}

export default User;

//props -> properties/params, a data that is passed from one cmponent to another
//LIFE CYCLE METHODS ->
//MOUNT- Component is initially rendered in ur dom
//Constructor, Render, componentDidMount - SIDE EFFECTS

//UPDATE- component is being updated
//UNMOUNT- componentis removed from the dom
