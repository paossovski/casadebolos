import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb65 from '../../images/cdb_65.jpg';
import cdb66 from '../../images/cdb_66.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page64 = () => {
  return(
    <div 
      id='Page64' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page64__Container'>
        <img className='Page64__Img' src={cdb65} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CONTROLE DE CHAVES:</b> Alguns colaboradores se encontram na pose das chaves da loja, já temos um levantamento de que possui, caso venham a perder, será responsável pelo pagamento destas chaves, por isso, cuidem e zelem por elas.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>RECICLE O LIXO:</b> Utilize as lixeiras corretas. Vamos reciclar! É fácil, respeite! Tem plaquinha de reciclado, recicle. O lixo reciclado é recolhido, destinado ao depósito e comercializado. Todo dinheiro arrecadado em prol da festa do final de ano dos colaboradores.
        </p>
        <img className='Page64__Img' src={cdb66} alt="" />
        <p className='Page__Text Page__Line--Height'>
          <b>ECONOMIZE SACOS PLÁSTICOS EMBALAGENS:</b> Os sacos plásticos que vem com as embalagens (32, 50 e 56) podem ser utilizados nas lixeiras, por favor utilize.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>COLETA LIXO RECICLÁVEL:</b><br/> 
          •	Papelão em geral é coletado pela nossa equipe da logística, separe e será recolhido. 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={64} />
        </div>
      </div>
    </div>
  );
}