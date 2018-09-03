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

  componentWillMount() {
    //44dd0d50-5d17-4255-9c74-98f7d732fb1c
    const { tokenId } = this.props.match.params;
    this.props.validateMail(tokenId);
  }

  render() {
    const { error, data } = this.props;
    return <div>{error ? `Error: ${error.error}` : 'En hora buena!!! usted a activado su usuario'}</div>;
  }
}

const mapStateToProps = ({ user }) => {
    return {
        error: user.validateError,
//        status: user.validateMail
    }
}

const mapDisptachToProps = dispatch => ({
  validateMail: payload => dispatch(actions.validateMailPending(payload)),
})
export default connect(mapStateToProps, mapDisptachToProps)(RegisterComponent);