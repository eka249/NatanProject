class Admin extends component {
  constructor() {
    super();
    state = {
      // user:
      //still deciding backend design for user
    };
  }

  render() {
    return <div>Hello ${this.state.user}</div>;
  }
}
