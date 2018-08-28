import React, { Component } from 'react';
import { render } from 'react-dom';
import { InternationalizationProvider, internationalize } from 'react-internationalization';
import * as languages from './locales';
import Routes from './routes';
/* hay que hacer una pagina web con un header, con un titulo una imagen
agregar un menu que pueda ser configurado desde afuera. empecemos con un js
agregar informacion que peuda ser proveeida desde afuera tambien.

- Crear estructura de datos.
- Ver que componentes requiero
- Crear estructura del header
*/
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

render(<Index />, document.getElementById('etk-root'));

export default Index;

