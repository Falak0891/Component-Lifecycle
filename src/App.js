import React from "react";
import ComponentA from "./Components/ComponentA";
import Question from "./Components/Timer/Timer/Timer";
import Timer from "./Components/Timer/Timer/Timer";
import Users from "./Components/UserList/User";
import ErrorBoundary from "./ErrorBoundary";
// // import TimerApp from "./Components/Timer/Timer2/TimerApp";
// import Users from "./Components/UserList/User";
// // import { Hello } from "./Hello";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      mount: true,
      hasError:false
    }

    this.error ="";

  }

  handleMount =() => {
    this.setState((prevState) =>{
      return {mount: !prevState.mount}
    })
  }


  render(){
    console.log("render")
        
    return (
      <>
      {/* <button onClick ={this.handleMount}>{this.state.mount?"Hide":"Show"}</button>
      {this.state.mount ?  <Question />: null } */}

      <ErrorBoundary>
    
        <ComponentA/>
        </ErrorBoundary>

        <ErrorBoundary>
    
        <Users />
        </ErrorBoundary>
      
        
      
      
      
      </>

      
    );
  }
}

export default App;
