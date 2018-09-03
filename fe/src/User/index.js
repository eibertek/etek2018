import React, { Component } from 'react'
import { Switch, Route } from 'react-router';
import HomeContainer from './Components/Home';
import RegisterUser from './Components/Register.Component';

export default class Routes extends Component {
  render() {
    return (
      <div>
            <Switch>
                <Route exact path='/user/register' component={props => <RegisterUser {...props}></RegisterUser>} />
                <Route exact path='/user/' component={props => <HomeContainer {...props}></HomeContainer>} />
            </Switch>        
      </div>
    )
  }
}
