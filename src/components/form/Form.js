import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName : '',
             userEmail : '',
             password : '',
        }
    }

    handleUserNameChange = (event) =>{
        this.setState({
            userName : event.target.value
        })
    }
    handleUserEmailChange = (event) => {
        this.setState({
            userEmail : event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })
    }
    handleSubmit = (event) => {
       alert("form submitted")
    }
    
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <h1>Form Component</h1>
                    <label>User Name</label>
                    <input 
                    type = "text" 
                    value = {this.state.userName} 
                    onChange = {this.handleUserNameChange}/> <br></br>

                    <label>User Email</label>
                    <input 
                    type = "email" 
                    value = {this.state.userEmail} 
                    onChange = {this.handleUserEmailChange}/><br></br>

                    <label>Password</label>
                    <input 
                    type = "password" 
                    value = {this.state.password} 
                    onChange = {this.handlePasswordChange}/>   

                    <button> Submit </button>
                </div>
            </form>
            
        )
    }
}

export default Form
