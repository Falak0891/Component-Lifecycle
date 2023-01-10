import React from "react";
import ComponentA from "./Components/ComponentA";
import Timer from "./Components/Timer/Timer/Timer";
// // import TimerApp from "./Components/Timer/Timer2/TimerApp";
// import Users from "./Components/UserList/User";
// // import { Hello } from "./Hello";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      mount: true
    }

  }

  handleMount =() => {
    this.setState((prevState) =>{
      return {mount: !prevState.mount}
    })
  }
  

  render(){
    
    return (
      <>
      <button onClick ={this.handleMount}>{this.state.mount?"UN-MOUNT":"MOUNT"}</button>
      {this.state.mount ?  <Timer />: null }
      
      </>

      
    );
  }
}

export default App;
