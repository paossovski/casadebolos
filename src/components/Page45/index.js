import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb43 from '../../images/cdb_43.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page45 = () => {
  return(
    <div 
      id='Page45' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page45__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>ATENDENTES - FIQUEM NA ÁREA DE ATENDIMENTO – “PELO AMOR DE DEUS”:
          </b> Evitará diversos problemas no seu desempenho, permanecendo no seu respectivo lugar. Vai etiquetar tampa de embalagens? Faz e fica no atendimento. Não tem nada para fazer? Fica no atendimento! Passem a maior parte do tempo no atendimento, cumprimentem as pessoas, deem bom dia aos vizinhos e por aí vai. Sejam gentis! Sempre atenda no balcão, evite o cliente colocar a “cara” na porta telada para nos chamar, ou gritar. NUNCA atender o cliente de braços cruzados, sair para o lado de fora do balcão para mostrar proximidade. Utilize seu tempo livre para produzir - seja para organizar a geladeira, limpar ou repor bolos no balcão, verificar limpeza do chão, vidro (balcão) e etc. Chegou  mais de um cliente, <b>APERTE A CAMPAINHA</b>, nada de gritar, e muito menos deixar o cliente esperando.
        </p><br/><br/>
        <img className='Page45__Img' src={cdb43} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={45} />
        </div>
      </div>
    </div>
  );
}