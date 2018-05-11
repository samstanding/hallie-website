import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username:'',
            password: '',
            message: '',
        };
    }

    registerUser = (event) => {
        event.preventDefault();

        if (this.state.username === '' || this.state.password === '') {
            this.setState({
                message: 'Choose a username and password!',
            })
        } else {
            const request = new Request('api/user/register', {
                method: 'POST',
                headers: new Headers ({'Content-Type': 'application/json'}),
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                }),
            });

            fetch(request)
            .then((response) => {
                if(response.status === 201) {
                    this.props.history.push('/admin');
                } else {
                    this.setState({
                        message: 'That didn\'t work.', 
                    });
                }
            })
            .catch(() => {
                this.setState({
                    message: 'Something went wrong. Is the server running?',
                });
            });
        }
    }


handleInputChangeFor = propertyName => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    });
}

renderAlert() {
    if(this.state.message !== '') {
        return (
            <h2 
                className="alert"
                role="alert"
            > 
            {this.state.message}
            </h2>
        );
    }
    return (<span />);
 }

 render() {
     return (
         <div>
             {this.renderAlert()}
             <form onSubmit={this.registerUser}>
                <h1>Register User</h1>
                <div>
                    <label htmlFor="username">
                    Username:  
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor('username')}
                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                    Password:   
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor('password')}
                    />
                    </label>
                </div>
                <div>
                    <input 
                        type="submit"
                        name="submit"
                        value="Register"
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default RegisterPage;

