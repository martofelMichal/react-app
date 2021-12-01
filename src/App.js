import React, {Component} from 'react';
import MainSection from './MainSection/MainSection';
import Navbar from './Navbar/Navbar';
import './App.css';

class App extends Component {

  active = "Active";
  inactive = "Inactive";

  state = {
    username: "majkel",
    role: "admin",
    active: true
  }

  render(){
    return(
      <div class="body">
           <Navbar></Navbar>
           <MainSection name={this.state.username}></MainSection>
      </div>
    )
  }
}


export default App;
