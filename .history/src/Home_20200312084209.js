import React, { Component } from "react";

class Home extends Component {
  state = {
    username: "",
    password: ""
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
