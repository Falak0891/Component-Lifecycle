import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "ComponentA"
         }
         console.log("ComponentA Constructor");
         
    }

    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps");
        
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount");
        this.setState({name: "CA"});
    }
    
    render() { 
        console.log("ComponentA Render")
        return ( 
            <>
            <h1>{this.state.name1}</h1>
            <ComponentB name={this.state.name1}/>
         </>
            
         );
    }
}
 
export default ComponentA ;