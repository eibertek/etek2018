import React, { Component } from 'react';
import Layout from './Components/Layout';
import MenuComponent from './Components/Menu';

export default props => <Layout Menu={MenuComponent} {...props}>
    {props.children}
</Layout>