import React, {useState} from 'react';
import {Link , useHistory} from 'react-router-dom';
//Importando API
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

export default function Register(){
// Armazenando os valores da api em estado

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [city, setCity] = useState('');
const [whatsapp, setWhatsapp] = useState('');
const [uf, setUf] = useState('');


//Realizando navegacao atraves de uma funcao javascript (Tipo um modelAndView)
const history = useHistory();

async function handleRegister(e){
    e.preventDefault();

    const data = {
        name,
        email,
        whatsapp,
        city,
        uf
    };
    try{
    const resp = await api.post('ongs',data);
    alert(`Seu ID de acesso: ${resp.data.id}`);
    history.push("/");
    }catch(err){
        alert('Erro ao cadastrar Ong.')
    }
}

    return (
        <div className="register-container">
            <div className = "content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="black-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                            Não Tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da Ong"/>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/>
                    <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="Whatsapp"/>
                    
                    <div className="input-group">
                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
                        <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{width:80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}