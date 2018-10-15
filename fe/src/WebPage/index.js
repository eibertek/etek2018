import React from 'react';
import Layout from './Components/Layout';
import { connect }  from 'react-redux';
import MenuComponent from './Components/Menu';

export const WebPage = props => <Layout Menu={MenuComponent} {...props}>
    {props.children}
</Layout>

const stateMapsToProps = (state) =>  ({
    loginStatus: state.user.loginStatus,
    error: state.user.error
})

export default connect(stateMapsToProps, null)(WebPage);

