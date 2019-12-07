import React, { Component } from 'react';
import {NavLink, Route, withRouter } from 'react-router-dom';
import VRL from '../projects/Diffraction/VRL';

class Projects extends Component {
    render() {
        return (
            <div>
                
                <NavLink to="/projects/VRL/">Physics Diffraction Simulator</NavLink>
            </div>

            
        );
    }
}

export default withRouter(Projects);