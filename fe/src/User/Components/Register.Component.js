import React, { Component } from 'react'
import TextBox from '../../library/TextBox';
import Button from '@material-ui/core/Button';

export default class RegisterComponent extends Component {

  onChange = name => evt => this.setState({[name]: evt.target.value})  
  render() {
    const commonProps = (placeholder, helperText) => ({            
        InputLabelProps:{
            shrink: true,
        },             
        placeholder,
        helperText
    });

    return (
      <div>
        <h2>Register User:</h2>
        <section>
            <TextBox id="name" name="name" label={'Name:'} onChange={this.onChange('name')} {...commonProps('Name', 'Enter a valid name')}/>
        </section>
        <section>
            <TextBox id="lastname" name="lastname" label={'Last Name:'} onChange={this.onChange('lastname')} {...commonProps('LastName', '')} />
        </section>
        <section>
            <TextBox id="username" name="username" label={'User Name:'} onChange={this.onChange('username')} {...commonProps('UserName', 'Could be anything alphanumeric')} />
        </section>
        <section>
            <TextBox id="password" name="password" className="password-input" label={'Password:'} onChange={this.onChange('password')} type="password" {...commonProps('Password', 'Password has to be complex, with number, letters and an special char. its for your own good :)')} />
        </section>
        <section>
            <Button onClick={evt => console.log(this.state)}>Click here to save</Button>
        </section>
      </div>
    )
  }
}
