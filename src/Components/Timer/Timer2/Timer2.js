import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0
    };

    this.timer = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
     console.log(prevProps, "componentDidUpdate()", this.props);
    if (prevProps.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
      } else if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <h2>Time Spent: {this.state.time}</h2>
      </div>
    );
  }
}
