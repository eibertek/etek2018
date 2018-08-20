import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './WebPage/Components/Layout';
import Menu from './WebPage/Components/Menu';
import Routes from './routes';

class Index extends Component {
    render() {
        return (
           <Layout 
           Menu={Menu}
           Content={Routes}
           />
        );
    }
}

render(<Index />, document.getElementById('etk-root'));

export default Index;

