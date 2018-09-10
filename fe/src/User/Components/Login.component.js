import React, { Component, Fragment } from 'react'
import { connect }  from 'react-redux';
import * as actions from '../Redux/user.actions';
import TextBox from '../../library/TextBox';
import Button from '../../library/Button';

export class Login extends Component {
  state = {
      username:'',
      password: '',
  }  
  onChange = name => evt => this.setState({[name]: evt.target.value})  
  
  render() {
    const { username, password } = this.state;
    const { error, loginStatus, location:{ pathname }} =  this.props; 
    if(pathname === '/user/register') return null;
    if(loginStatus === 'SUCCESS') return null;
    return (
      <Fragment>
        <section>{error ? <span>{error.error}</span> : null}</section>  
        <section className="login-input">
            <TextBox 
                id="username" 
                className="login-input" 
                name="username" 
                label={'Username'} 
                onChange={this.onChange('username')} 
                disableUnderline={true}
            />
        </section>
        <section className="login-input">
            <TextBox 
                id="password" 
                name="password" 
                label={'Password'} 
                onChange={this.onChange('password')} 
                type="password"
                disableUnderline={true}
            />
        </section>
        <section className="login-button" >
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={(evt) => this.props.login(username, password )} 
            >Submit</Button>
        </section>        
      </Fragment>
    )
  }
}

const stateMapsToProps = (state) =>  ({
    loginStatus: state.user.loginStatus,
    error: state.user.error
})

const dispatchToProps = dispatch => ({
    login: (username, password) => dispatch(actions.loginPending(username, password)),
});

export default connect(stateMapsToProps, dispatchToProps)(Login);