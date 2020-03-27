import React, {useState} from 'react';
import './styles.css';
import {Link,useHistory} from 'react-router-dom';

import heroesimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';



export default function Logon(){

    //Realizando navegacao atraves de uma funcao javascript (Tipo um modelAndView)
    const history = useHistory();

    //Utilizando o useState para recuperar o valor do html e enviar para a api
    const [id,setId] = useState('');

    async function handleLogin(e){
        e.preventDefault();

       try {
           const response = await api.post('sessions',{id});

           //Salvando no historico do navegador
           localStorage.setItem('ong',id);
           localStorage.setItem('ongName',response.data.name);

           history.push('/profile')
           console.log(response.data.name);
       } catch (error) {
           alert('Falha no login');
       }
    }

    return (
        <div className="logon-container">
                <section className = "form">
                    <img src={logoimg} alt="Be the Hero"></img>

                    <div>
                        { /* Chamando a funcao ao realizar o submit */ }
                    </div>
                        <form onSubmit={handleLogin}> 
                            <h1>Faça seu logon</h1>

                             { /* Recuperando o valor atraves do evento onChange */}
                            <input value={id} onChange={e => setId(e.target.value)} placeholder="Sua Identificação"></input>
                            <button className="button" type="submit">Entrar</button>

                            <Link className="black-link" to="/register">
                                <FiLogIn size={16} color="#E02041" />
                                Não tenho cadastro
                            </Link>                 
                        </form>


                </section>

                <img src={heroesimg} alt="Heroes"></img>
            </div>
    );
}