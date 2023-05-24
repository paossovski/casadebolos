import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb77 from '../../images/cdb_77.jpg';
import cdb78 from '../../images/cdb_78.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page79 = () => {
  return(
    <div 
      id='Page79' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page79__Container'>
        <div className='Page79__Img__Container'>
          <img className='Page79__Img' src={cdb77} alt="" />
          <img className='Page79__Img' src={cdb78} alt="" />
        </div><br/><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CLIENTE LIGOU, RECLAMOU E NÃO TEM MAIS O BOLO:</b> pegue os dados dele na hora, como o nome, telefone, referencias - faça mais perguntas sobre o problema, certifique-se que o bolo realmente pode ter problema pelo relato, acalme o cliente e diga que ele poderá trocar por um bolo do mesmo valor (trocas somente na loja que de fato ocorreu a compra e nunca em outras lojas)  Avise a Central de atendimento para colocar estas informações no cadastro do cliente Obs: o cliente tem um prazo de 30 dias para efetuar a troca, informe o cliente sobre esse prazo, mas tente fazer a troca de imedianto e incentivem as trocas por bolos rentáveis. SEMPRE!
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Sempre olhar WhatsApp de sua respectiva loja (da mesma maneira que você cuida do seu celular pessoal) -</b> passar para a Central de Atendimento situações  necessárias, para que elas entrem em contato com o cliente, assim, resolvendo a questão.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={79} />
        </div>
      </div>
    </div>
  );
}