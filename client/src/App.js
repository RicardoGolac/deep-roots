import React from "react";
import AppNavbar from "./components/AppNavbar";
import LifeCoaching from "./components/LifeCoaching";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <LifeCoaching />
    </div>
  );
}

export default App;
