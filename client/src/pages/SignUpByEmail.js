import React, { Component } from "react";
import axios from "axios";

class SignUpByEmail extends Component {

    state = {
        email: null,
        password: null
    }

    signUpUser = () => {
        const user = {
            email : this.state.email,
            password: this.state.password
        }
        axios.post("/api/signup", user).then(res => console.log(res)).catch(err => console.log(err))
    }

    handleChange = (event) => {
        const {name} = event.target
        const {value} = event.target
        this.setState({
            [name] : value,
        });
        
    }

    render(){
        return(
            <div>
                <input onChange={this.handleChange} name="email" placeholder="Email (required)" />
                <input onChange={this.handleChange} name="password" placeholder="Password (required)" />
                <button onClick={this.signUpUser}>Submit</button>
            </div>
        )
    }
    
}

export default SignUpByEmail