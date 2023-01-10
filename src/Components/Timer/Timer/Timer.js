import React from "react";

 class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 10
    };

    this.timer = null;
    console.log("Timer Constructor");
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log("_________________________________");
    
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time - 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("_________________________________");
    console.log("Timer ComponentWillUnmount");
    console.log("_________________________________");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("ShouldComponentUpdate? Yes")
    return true;
  }

  componentDidUpdate(prevProps,prevState, snapShot){
    console.log("Timer componentDidUpdate");
    console.log("_________________________________");
    if(this.state.time === 0){
      clearInterval(this.timer);
    }
  }

  render() {
    console.log("Timer render")
    let t =new Date(this.state.time * 1000).toISOString();
    console.log(t)
    return (
      <div className="app">
        <h2>
        {}
          Time Left:{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11,19)}
          </h2>

          
        {/* {this.state.time===0? <h1>Times UP!</h1>: <Question/>} */}
          
        
      </div>
    );
  }
}

export default class Question extends React.Component{
  constructor(){
    super();
    this.state={
      selectedValue: null,
      correct: false
    }
  }
  
  onSubmit = (e) =>{
    e.preventDefault();

    if(this.state.selectedValue === "getSnapshotBeforeUpdate()"){
      console.log("Correct Answer!");
      this.setState({correct: true})
    }
    else{
      console.log("Incorrect Answer!!");
      this.setState({correct: false})
    }

  }

  onValueChange = (e) => {
    this.setState({
      selectedValue: e.target.value
    })
  }
  render(){
  return(
    <>
    <Timer correctAnswer={this.state.correct}/>
    <div className="form">
      {this.state.correct? <h1>CORRECT ANSWER</h1>:
      <form onSubmit={this.onSubmit}>
      <h3>Which method is not a mounting method in the component lifecycle?</h3>
      <input type="radio" value="render()" name="mount" onChange={this.onValueChange}/>render()<br/><br/>
      <input type="radio" value="getDerivedStateFromProps()" name="mount" onChange={this.onValueChange}/>getDerivedStateFromProps()<br/><br/>
      <input type="radio" value="constructor()" name="mount" onChange={this.onValueChange}/>constructor()<br/><br/>
      <input type="radio" value="getSnapshotBeforeUpdate()" name="mount" onChange={this.onValueChange}/>getSnapshotBeforeUpdate()<br/><br/>
      <button>Submit</button>

    </form>}
    
    </div>
    </>
  )
  }
}