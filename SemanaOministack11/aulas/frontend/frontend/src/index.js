import React from 'react';

//DOM : Importando a integracao do react com o navegador que representa a arvore de elementos
import ReactDOM from 'react-dom';

import App from './App';

// Renderizando , colocando em tela o App dentro da div root
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));

