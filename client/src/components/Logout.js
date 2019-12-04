import React from "react";
import "../css/logout.css";

const Logout = props => {
  const onSubmit = event => {
    event.preventDefault();
    props.logout();
    // axios post to auth/login
    // redirect to login
  };

  return (
    <div className="logout-button">
      <form onSubmit={onSubmit}>
        <button className="nav-link" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Logout;
