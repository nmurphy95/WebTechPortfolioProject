import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import axios from 'axios';
import Fetch from './components/Fetch';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.previousLocation = this.props.location;

    this.state = {
      isLoggedIn: false,
    };
    
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidUpdate() {
    const { location } = this.props;
    if (!(location.state && location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }

  handleLogin = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
    console.log(this.state.isLoggedIn);
  }

  render() {
    const { location } = this.props;
    const { isLoggedIn } = this.state;
    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );


    return (
      
        <div className="App">
          <NavBar onSubmit={this.handleLogin} isLoggedIn={isLoggedIn} />
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/"
              render={(props) => <Home isLoggedIn={isLoggedIn} />}
            />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/login" component={Login} />
          </Switch>
          {isModal
            ? <Route path="/login" component={Login} />
            : null
          }
        </div>
    );
  }
}

export default withRouter(App);
