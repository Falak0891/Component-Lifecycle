import React from "react";

class Counter extends React.Component {
  constructor(props){
    super(props);
    console.log("CONSTRUCTOR");

    this.state= {
      CounterCount:this.props.count
    }

    this.handleInc = () => {
      this.setState((prev) => {
        return{
          CounterCount: prev.CounterCount+1
        }
      })
    }

    this.handleDec = () => {
      this.setState((prev) => {
        return{
          CounterCount: prev.CounterCount-1
        }
      })
    }
  }

  
  componentDidMount(){
    console.log("COMPONENT_DID_MOUNT");
    console.log("***************");
    console.log("MOUNTING PHASE");
    console.log("***************");
    console.log("-----------------------------------");
  }

  componentDidUpdate(prevProp,prevState,snapShot){
    console.log("COMPONENT_DID_UPDATE");
    console.log("Previous Props:",prevProp);
    console.log("Preavious State: ",prevState);
    
    console.log("Current Props from snapShot: ",snapShot.currentProps);
    console.log("Current State from snapShot: ",snapShot.currentState);
    
    console.log("***************");
    console.log("UPDATING PHASE");
    console.log("***************");
    console.log("-----------------------------------");
  }

  getSnapshotBeforeUpdate(prevProp, prevState){
    console.log("GET_SNAPSHOT_BEFORE_UPDATE");
    return {currentState: this.state.CounterCount, 
            currentProps: this.props.count
    };
  }
  
  render(){
    console.log("RENDER")
    return (
      <div className="app">
      <h1>{this.state.CounterCount}</h1>
      <button onClick={this.handleInc}>Increase</button>
      <button onClick={this.handleDec}>Decrease</button>

      </div>
    );
  }
}

export default Counter;
