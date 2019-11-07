import React from "react";
import AppNavbar from "./components/AppNavbar";
import PageContents from "./components/pageContents";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <PageContents />
    </div>
  );
}

export default App;
