import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
import Routes from './routes';
import store from './store';

class Index extends Component {
    render() {      
        return (
          <I18nextProvider i18n={ i18n }>
            <Routes />
          </I18nextProvider>          
        );
    }
}

const IndexProvider = ({ store }) => (<Provider store={store}>
        <Index />
        </Provider>);

render(<IndexProvider store={store} />, document.getElementById('etk-root'));

export default Index;

