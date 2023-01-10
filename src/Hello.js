import React from "react";
export class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { msg: 'Hi' };
        this.handleClick = this.handleClick.bind(this);
        this.helloRef = React.createRef();
        console.log("CONTRUCTOR_HELLO")
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.msg !== this.state.msg) {
            const hello = this.helloRef.current;
            console.log(hello.offsetLeft);
            return {left: hello.offsetLeft, top: hello.offsetTop};
            
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            this.helloRef.current.style.left = (snapshot.left + Math.random()*100) + "px";
            this.helloRef.current.style.top = (snapshot.top + Math.random()*300) + "px";
        }
        console.log("CDU_HELLO");
    }
    handleClick() {
        if (this.state.msg === 'Hi') {
            this.setState({ msg: 'Bye' });
        } else {
            this.setState({ msg: 'Hi' });
        }
    }
    render() {
        console.log("RENDER_HELLO");
        return <button ref={this.helloRef} onClick={this.handleClick} style={{ position: "absolute" }}>{this.state.msg}</button>;
    }
}