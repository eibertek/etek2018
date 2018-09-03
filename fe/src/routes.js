import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import WebPage from './WebPage';
import Main from './WebPage/Components/Main';
import Users from './User';
import structure from './WebPage/structure.json';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path='/blog' component={props => <WebPage {...props}><Main data={structure[props.match.path] || {}}/></WebPage>} />
                <Route path='/projects' component={props => <WebPage {...props}><Main data={structure[props.match.path] || {}} /></WebPage>} />
                <Route path='/whoarewe' component={props => <WebPage {...props}><Main data={structure[props.match.path] || {}} /></WebPage>} />
                <Route path='/private' component={props => <WebPage {...props}><Main data={structure[props.match.path] || {}} /></WebPage>} />
                <Route path='/user' component={props => <WebPage {...props}><Users {...props} /></WebPage>} />
                <Route exact path='/' component={props => <WebPage {...props}><Main data={structure[props.match.path] || {}} /></WebPage>} />
                <Route exact path='*' component={props => <WebPage {...props}><Main>NOT FOUND PAGE</Main></WebPage>} />
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Routes;