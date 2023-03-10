import { Component } from "react";
class Users extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            data:[],
            hasError:false
        }
    }

    componentDidMount(){
       localStorage.setItem("user", "ReactUser");
        
        fetch('https://jsonplaceholder.typicode.com/uses')
            .then((response) => response.json())
            .then((data) => this.setState({data}));

    }
    
    render() { 
        
        
        return (<>
        {this.state.data.map((user) => {
            return (
                <ul>
                    <li>{user.name}</li>
                </ul>

            )
            
        })}
        </> );
    }
}
 
export default Users;