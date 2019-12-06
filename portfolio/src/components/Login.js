import React, { Component } from 'react';
import '../css/login.css';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isError: false,
            error: '',
            label: '',
        };
    }

    onChange = event => {
        const value = event.target.value;
        this.setState({ value, error: '' });
        return this.props.onChange;
    };
    handleSubmit = () => {
        if (this.state.value == "password") {
            this.props.history.goBack();
        }
        else
            this.setState({ error: "Incorrect Password", isError: true});
    };


    render() {
        const { isError, error, value } = this.state;
        return (
            <div 
                role='button'
                className='wrapper'
                onClick={() => this.props.history.goBack()}
            >
                <div 
                    role='button'
                    className='modal'
                    onClick={e => e.stopPropagation()}
                >
                    <h1>Please enter your password:</h1>
                    <input 
                        id='password'
                        type='text'
                        value={value}
                        placeholder="********"
                        onChange={this.onChange}
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                    {isError && <p style="color:red">{error}</p>}
                </div>
            </div>
        )
    }
}

export default withRouter(Login);
