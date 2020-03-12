import React, { Component } from "react";

class Home extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, username: e.target.username });
  };

  handleSubmit = e => {
    e.preventDefault();
    //   fetch("")
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter Your Username"></input>
        <input type="password" placeholder="Enter Your Password"></input>
        <button>Sign In</button>
        {/* button routes to profile */}
      </form>
    );
  }
}

export default Home;
