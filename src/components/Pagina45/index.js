import '../../global_styles.css';
import './styles.css';

import Bolos43 from '../../images/bolos_43.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina45 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-45'>
        <p className='Texto T-45'>
          <b>ATENDENTES - FIQUEM NA ÁREA DE ATENDIMENTO – “PELO AMOR DE DEUS”:
          </b> Evitará diversos problemas no seu desempenho, permanecendo no seu respectivo lugar. Vai etiquetar tampa de embalagens? Faz e fica no atendimento. Não tem nada para fazer? Fica no atendimento! Passem a maior parte do tempo no atendimento, cumprimentem as pessoas, deem bom dia aos vizinhos e por aí vai. Sejam gentis! Sempre atenda no balcão, evite o cliente colocar a “cara” na porta telada para nos chamar, ou gritar. NUNCA atender o cliente de braços cruzados, sair para o lado de fora do balcão para mostrar proximidade. Utilize seu tempo livre para produzir - seja para organizar a geladeira, limpar ou repor bolos no balcão, verificar limpeza do chão, vidro (balcão) e etc. Chegou  mais de um cliente, <b>APERTE A CAMPAINHA</b>, nada de gritar, e muito menos deixar o cliente esperando.
        </p><br/><br/>
        <img className='Bolos43' src={Bolos43} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={45} />
      </div>
    </div>
  );
}