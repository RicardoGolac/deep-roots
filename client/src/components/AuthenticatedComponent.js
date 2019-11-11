import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verified: false
    };
  }

  componentDidMount() {
    this.props.verify("/users/verify", data => {
      this.setState({
        verified: data.success
      });

      // User is not authorized or their session expired
      // Move them to the login page to get a new session
      if (!data.success) {
        console.log("Session ended: " + JSON.stringify(data));
        this.props.history.push("/users/login");
      } else {
        console.log("Authenticated user data: " + JSON.stringify(data));
      }
    });
  }
  render() {
    if (!this.state.verified) {
      return (
        <div>
          <p>Loading....</p>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(AuthenticatedComponent);
