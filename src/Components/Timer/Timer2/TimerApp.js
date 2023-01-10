import React from "react";
import Timer from "./Timer2";

export default class TimerApp extends React.Component {
  state = {
    timerOn: false
  };

  toggleTimersState = () => {
    this.setState((prevState) => ({ timerOn: !prevState.timerOn }));
  };

  render() {
    return (
      <div className="TimerApp">
        <h1>Hello React</h1>
        <Timer timerOn={this.state.timerOn} />
        <button onClick={this.toggleTimersState}>
          {this.state.timerOn ? "Stop Timer" : "Start Timer"}
        </button>
      </div>
    );
  }
}
