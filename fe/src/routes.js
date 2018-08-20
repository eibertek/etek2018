import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class Routes extends Component {
    render() {
        const { Layout } = this.props;
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={props => <div>CONTENT</div>} />
                <Route path='/roster' component={props => <div>ROSTER</div>} />
                <Route path='/schedule' component={props => <div>SCHEDULE</div>} />
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Routes;