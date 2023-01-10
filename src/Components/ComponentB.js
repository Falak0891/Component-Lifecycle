import React, { Component } from 'react';

class ComponentB extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "CA"
         }
         console.log("ComponentB Constructor");

         
    }

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
        return ( <><h2>{this.state.name}</h2></> );
    }
}
 
export default ComponentB ;