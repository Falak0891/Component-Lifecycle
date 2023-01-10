import React from "react";

export default class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0
    };

    this.timer = null;
    console.log("Timer Constructor");
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log("_________________________________");
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("_________________________________");
    console.log("Timer ComponentWillUnmount");
    console.log("_________________________________");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("ShouldCompoentUpdate? Yes")
    return true;
  }

  componentDidUpdate(prevProps,prevState, snapShot){
    console.log("Timer componentDidUpdate");
    console.log("_________________________________");
  }

  render() {
    console.log("Timer render")
    let t =new Date(this.state.time * 1000).toISOString();
    console.log(t)
    return (
      <div>
        <h2>
        {}
          Time Spent:{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11,19)}
          
        </h2>
      </div>
    );
  }
}
