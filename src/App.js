import React,{Component} from 'react';
import {BrowserRouter ,Router,Route,Link} from "react-router-dom";
import './App.css';
import MainPage from './starterpages/mainPage'
import Home from "./starterpages/Home";


class App extends Component{
    render() {
        return (
            <div>
            <BrowserRouter>
                <Link to='/Home' className='login__navbar'>
                    Home </Link>
                <Route exact path='/' component={MainPage}/>
                    <Route  path='/Home' component={Home}/>
                    <footer>
                        <span>fateme.ragh@gmail.com</span>
                        <span>All rights reserved by Fatemeh</span>
                    </footer>
            </BrowserRouter>
    </div>
        );
    }
}

export default App;
