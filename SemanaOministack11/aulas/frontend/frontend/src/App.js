import React from 'react';

import '../src/global.css';
import Routes from './routes';


/**
 * JSX - JavaScript XML  (Quando o Html esta integrado dentro do javascript)
 * 
 * Life-reload : Atualiza a tela automatico
 * 
 * Um componente do React representa uma funcao que retorna HTML e pode ter funcionalidades
 * javascript / CSS etc..
 * 
 * Estado : Toda vez que for alterado , o componente vai renderizar novamente em tela
 * Entao devemos criar um estado para o valor ser refletivo na tela.
 * 
 * Imutabilidade : Nao se pode manipular o valor do estado de uma forma 
 * direta , deve ser sobrescrito
 * 
 */


function App(){
    return(
        <Routes/>    
    );
}

export default App;