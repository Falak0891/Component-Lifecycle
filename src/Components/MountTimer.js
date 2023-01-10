import React from "react";
import Timer from "./Timer/Timer/Timer";

class MountTimer extends React.Component {
    constructor(){
        super();

        this.state = {
            mount: true
        }
    }

    toggleMount = () => {
        this.setState((prevState) => {
            return{
                mount: !prevState.mount
            }

        })
    }
  

  render(){
    
    return (
        <>
        <button onClick={this.toggleMount}>{this.state.mount ? "Un-Mount Timer" : "Mount Timer"}</button> 
        {this.state.mount? <Timer/>: null}
        </>
        
    );
  }
}

export default MountTimer;
