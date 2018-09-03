import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { InternationalizationProvider, internationalize } from 'react-internationalization';
import * as languages from './locales';
import Routes from './routes';
import store from './store';

const InternationalizeApp = internationalize(Routes);
class Index extends Component {
    render() {
        return (
          <InternationalizationProvider defaultLanguage="en" languages={languages}>
            <InternationalizeApp />
          </InternationalizationProvider>
        );
    }
}

const IndexProvider = ({ store }) => (<Provider store={store}>
        <Index />
        </Provider>);

render(<IndexProvider store={store} />, document.getElementById('etk-root'));

export default Index;

