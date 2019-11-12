import React from "react";
import { Redirect } from "react-router-dom";
import "../css/dashboard.css";

const Dashboard = ({ loggedIn, user }) => {
  return (
    <>
      {loggedIn ? (
        <div className="dashboard-view-container">
          <div className="dashboard-container">
            <h2>Dashboard</h2>
            <p>Hello, {user.name}!</p>
            <br />
            {Object.keys(user).map((k, index) => (
              <p
                key={index}
                className="dashboard-json-info"
              >{`${k}: ${user[k]}`}</p>
            ))}
          </div>
        </div>
      ) : (
        <Redirect to="/users/login" />
      )}
    </>
  );
};
export default Dashboard;
