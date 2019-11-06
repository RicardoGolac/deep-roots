import React from "react";
import AppNavbar from "./components/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {

  render() { 
    return (
      <div>
        <Search 
        filterText = {this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)} 
        />
        <main>
          <ShortList 
            favorites = {this.state.favorites}
            data = {this.props.data}
          />
          <NamesList 
          data={this.props.data}
          filterText = {this.state.filterText}
          addFavorites={this.addFavorites.bind(this)}
          />
          <Credit />
        </main>
      </div>
    )
  }

}

export default App;
