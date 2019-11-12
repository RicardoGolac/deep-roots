import React from "react";
import AppNavbar from "./components/AppNavbar";
import Workshops from "./components/Workshops";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Workshops />
    </div>
  );
}

export default App;
