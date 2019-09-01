import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import SignUpForm from "./signup";
import SignInForm from "./login";
import '../App.css';


export default class MainPage extends React.Component{
    render() {
        return (
            <Router>
            <div className="App">
                <div className='welcome'>
                        <span className='span1'>
                            Hello Music
                        </span>
                    <span className='span2'>
                            By FATEMEH
                        </span>


                </div>
                <div className="login">
                    <div className="FormTitle">
                        <Link to='/sign-in' className='Title'>
                            Sign In </Link>
                        <Link exact to='/' className='Title'>
                            Sign Up</Link>
                    </div>

                    <Route exact
                           path='/'
                           component={SignUpForm}>
                    </Route>
                    <Route
                        path='/sign-in'
                        component={SignInForm}>
                    </Route>

                    <button
                          className='button'
                          htmlFor="email"
                    >Enter
                    </button>

                </div>
            </div>
            </Router>
        );
    }
}