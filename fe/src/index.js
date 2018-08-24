import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from './WebPage/Components/Layout';
import MenuComponent from './WebPage/Components/Menu';
import Routes from './routes';
/* hay que hacer una pagina web con un header, con un titulo una imagen
agregar un menu que pueda ser configurado desde afuera. empecemos con un js
agregar informacion que peuda ser proveeida desde afuera tambien.

- Crear estructura de datos.
- Ver que componentes requiero
- Crear estructura del header
*/
class Index extends Component {
    render() {
        return (
           <Layout 
           Menu={MenuComponent}
           Content={Routes}
           />
        );
    }
}

render(<Index />, document.getElementById('etk-root'));

export default Index;

