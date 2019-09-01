import React,{Component} from 'react';

import {BrowserRouter as Router,Route,Link} from "react-router-dom";

export default class SignInForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitter');
        console.log(this.state);
    }


    render() {
        return (

                <div>
                    <form action=""
                          onSubmit={this.handleSubmit}
                          className='form'
                    >

                        <div>
                            <label
                                htmlFor="email"
                                >Email
                                Address</label>
                            <input
                                type="email"
                                id='email'
                                placeholder='Enter your email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label
                            >Password</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='Enter your password'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                    </form>
                </div>
        );
    }
}