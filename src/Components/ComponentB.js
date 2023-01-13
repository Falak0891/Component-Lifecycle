import React, { Component } from 'react';

class ComponentB extends Component {
   

    static getDerivedStateFromProps(props,state){
        console.log("ComponentB getDerivedStateFromProps");
        if(props.name && state.name !== props.name){
            return {
                name: "COMPONENT"
            }
        }
        return {name: "Hello"};
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount");
    }
    
    render() { 
        console.log("ComponentB Render")
        return ( <><h2>{this.state.name1}</h2></> );
    }
}
 
export default ComponentB ;