import React from "react";
import Timer from "./Timer";

class TimerApp extends React.Component {
    constructor(){
        super();
        this.state ={
            mount : true
        }
        console.log("TimerApp Constructor");
    }

    toggleMount= () => {
        this.setState((prevState) => {
            return{
                mount: !prevState.mount
            }
        })
    }

    componentDidMount(){
        console.log("TimerApp componentDidMount");
        console.log("********************************");
    }

    componentDidUpdate(){
        console.log("TimerApp componentDidUpdate");
        console.log("********************************");
    }

  render(){
    console.log("TimerApp Render");
    
    return (
        <>
         <button onClick ={this.toggleMount}>{this.state.mount ? "Un-Mount": "Mount"}</button>
         {this.state.mount? <Timer />: null}
        </>
       
    );
  }
}

export default TimerApp;
