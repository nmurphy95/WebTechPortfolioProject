import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.toggleLogin = this.toggleLogin.bind(this);
    }

    guestGreeting = () => {
        return
    }

    toggleLogin = () => {
        this.props.onSubmit();
    }
    render() {
        const { isLoggedIn } = this.props;
        return(
            <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/projects/">Projects</NavLink></li>
                <li><button onClick={this.toggleLogin}>{isLoggedIn ? 'Nolan Murphy' : 'Log In'}</button></li>
                {/* This is for logging in */}
                {/* <li>{ this.props.isLoggedIn 
                    ? <NavLink to="/signout/">Nolan Murphy</NavLink> 
                    : <NavLink to={{
                        pathname: "/login/",
                        state: { modal: true } 
                        }}
                    >
                        Log In
                    </NavLink>
                }</li> */}
            </ul>
        </nav>
        )
        
    }
}

export default NavBar;
// }