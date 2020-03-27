import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

export default function NewIncident(){

    const history = useHistory();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');

    async function handleNewIncident(e){
        const ongId = localStorage.getItem('ong');
        console.log(ongId)
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };

        console.log(data)

        try {
            await api.post('criarIncidents',data, {
                headers:{
                    Authorization: ongId,
                },
            });
            alert('Incidente criado com sucesso');
            history.push('/profile')
            
        } catch (error) {
            alert('Nao foi possivel criar um novo incidente')
        }
    }

    return (
        <div className="new-incident-container">
            <div className = "content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="black-link" to="/Profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titulo do caso"/>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição"/>
                    <input value={value} onChange={e => setValue(e.target.value)} placeholder = "Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}