import React, {useState , useEffect} from 'react';
import logoImg from '../../assets/logo.svg';
import {Link , useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api'

/**
 * useEffect : Dispara uma funcao em algum determinado momento da acao
 */

export default function Profile(){

    const history = useHistory();

    // Gravando as informacoes no estado , Inicializando no array vazio
    const [incidents , setIncidents] = useState([]);

    // Recuperando LocalStory
    const ongId = localStorage.getItem('ong');
    console.log(ongId)
    const ongName = localStorage.getItem('ongName');

    /**
     * 1 - Parametro : Qual funcao que vai ser executada
     * 2 - Parametro : Quando a funcao vai ser executada , toda vez que o valor
     * vez que a variavel mudar a acao useEffect sera executa novamente. Para que isso
     * nao aconteca deiamos o array vazio.
     */
    useEffect( () => {
        api.get('profile', {
            params: {
                id: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId]);

    /**
     * Deletar
     */

     async function handleDeleteIncident(id){
         console.log(id)
         console.log(ongId)
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization : ongId,
                }
            });
            //Varrendo todos os incidentes que eu tenho e readicionando os valores na lista
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('Erro ao deletar o caso')
        }
     }

     /**
      * Logout
      */

      function handleLogout (){
          localStorage.clear();
          history.push('/');
      }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bem vindo, {ongName}</span>
                    <Link className="button" to="/incidents/new">
                        Cadastrar novo caso
                    </Link>

                    <button onClick={handleLogout} type="button">
                        <FiPower size={18} color="#E02041"></FiPower>
                    </button>
            </header>

            <h1> Casos Cadastrados </h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}> 
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(incident.value)}</p>
                        {/** Passando uma funcao e nao um retorno de uma funcao */}
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}