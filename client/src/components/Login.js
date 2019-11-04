import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    // binding this TODO: Convert class components to hooks
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting the default state
    this.state = {
      email: "",
      password: "",
      redirectTo: "/home",
      loginError: "",
      isLoading: false
    };
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    this.setState({ isLoading: true });
    //This allows us to exchange the default behavior for our custom behavior
    event.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };

    this.props.login("/users/login", user, data => {
      if (data.success) {
        this.setState({
          email: "",
          password: "",
          isLoading: false
        });

        console.log(`Successfully logged in! ${JSON.stringify(data)}`);

        this.props.history.push("/home");
      } else {
        this.setState({
          email: "",
          password: "",
          isLoading: false,
          loginError: data.message
        });
        //this.props.history.push("/login");
      }
    });
  }

  render() {
    if (this.props.loggedIn)
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    return (
      <div className="login-view-container">
        <div className="login-container">
          <div className="login-input-container">
            <h3>Login User</h3>
            <br />
          </div>
          {this.state.loginError ? <p>{this.state.loginError}</p> : null}
          <form
            onSubmit={e => this.onSubmit(e)}
            className="login-form-container"
          >
            <div className="login-input-container">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="login-input"
                value={this.state.email}
                onChange={e => this.onChange(e)}
              />
            </div>
            <div className="login-input-container">
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                className="login-input"
                value={this.state.password}
                onChange={e => this.onChange(e)}
              />
            </div>
            <div className="login-input-container">
              <input type="submit" value="Login" className="login-button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
