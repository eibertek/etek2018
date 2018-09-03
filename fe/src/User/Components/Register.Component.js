import React, { Component } from 'react'
import { connect }  from 'react-redux';
import * as actions from '../Redux/user.actions';
import TextBox from '../../library/TextBox';
import Button from '@material-ui/core/Button';

export class RegisterComponent extends Component {
  state = {
    name: '',
    lastname: '',
    mail: '',
    username: '',
    password: '',
  };

  onChange = name => evt => this.setState({[name]: evt.target.value})  
  render() {
    const commonProps = (placeholder, helperText) => ({            
        InputLabelProps:{
            shrink: true,
        },             
        placeholder,
        helperText
    });
    const { error, registerData } = this.props;
    console.log(registerData);
    if(registerData) return <div>Se ha registrado correctamente, se le envio un mail para validar al usuario. Link: {registerData.tempToken}</div>;
    return (
      <div className="register-user-form">
        <h2>Register User:</h2>
        {error ? <span>{error.error}</span> : null }
        <section>
            <TextBox id="name" className="register-input" name="name" label={'Name:'} onChange={this.onChange('name')} {...commonProps('Name', 'Enter a valid name')}/>
        </section>
        <section>
            <TextBox id="lastname" className="register-input" name="lastname" label={'Last Name:'} onChange={this.onChange('lastname')} {...commonProps('LastName', '')} />
        </section>
        <section>
            <TextBox id="username" className="register-input" name="username" label={'User Name:'} onChange={this.onChange('username')} {...commonProps('UserName', 'Could be anything alphanumeric')} />
        </section>
        <section>
            <TextBox id="mail" className="register-input" name="mail" label={'Mail:'} type="email" onChange={this.onChange('mail')} {...commonProps('mail', 'has to be mail')} />
        </section>        
        <section>
            <TextBox id="password" className="register-input" name="password"  label={'Password:'} onChange={this.onChange('password')} type="password" {...commonProps('Password', 'Password has to be complex, with number, letters and an special char. its for your own good :)')} />
        </section>
        <section>
            <Button className="register-button" variant="outlined" color="primary" 
                    onClick={(evt) => this.props.saveUser(this.state)}>Click here to save</Button>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
    return {
        error: user.registerError,
        registerData: user.registerData
    }
}

const mapDisptachToProps = dispatch => ({
    saveUser: payload => dispatch(actions.saveUserPending(payload)),
})
export default connect(mapStateToProps, mapDisptachToProps)(RegisterComponent);