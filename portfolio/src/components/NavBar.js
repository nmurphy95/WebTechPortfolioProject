import React, { Component } from 'react';

class Home extends Component {
    render() {
        const {selectedSection, redirect} = this.state
        const { colorIndex } = this.props
        // if (this.state.redirect) {
        //     return (
        //         <Redirect to={`${selectedSection}`} push />
        //     )
        // } else {
            return (
                <div className='navBar'>
                    <div className='navWrapper'>
                        <div className='logo pointer' onClick={()=>this.selectSection('/')} >
                            <Logo colorIndex={colorIndex} />
                        </div>
                        <div className='lhs'>
                            <span className='navBarText' onClick={()=>this.selectSection('/')}> Work </span>
                        </div>
                        <div className='rhs'>
                            <span className='navBarText' onClick={()=>this.selectSection('/projects')}> Projects </span>
                        </div>
                    </div>
                </div>
            )
        }
    }
// }