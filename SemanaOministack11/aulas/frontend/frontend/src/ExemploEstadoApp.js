import React , { useState } from 'react';
import Header from './Header';
import Logon from './pages/Logon';

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

    const [count , setCount] = useState(0);

    function incrementar(){
         // useState retorna um array
         setCount(count + 1)
    }

    function zerar(){
        setCount(count - count)
    }

    return(
        <div>
            <Header>
            Clicks {count}
                <button onClick={incrementar} >Incrementar</button>
                <button onClick={zerar} >Zerar</button>
            </Header>
        </div>
    );
}

export default App;