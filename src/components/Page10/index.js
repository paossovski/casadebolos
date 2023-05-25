import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb05 from '../../images/cdb_05.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page10 = () => {
  return(
    <div 
      id='Page10' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div>
        <p className='Page10__Title'>
          <i className='Page__Text'>- Tabela organograma para melhor  visualização e entendimento.</i>
        </p><br/><br/><br/>
        <img className='Page10__Img' src={cdb05} alt="" />
      </div><br/><br/><br/><br/><br/>
      <div className='Page10__Container'>
        <h1 className='Page__Text Page10__Title'>CENTRAL DE ATENDIMENTO</h1>
        <br/><br/>
        <div className='Page__Text Page10__Line'>
          <p className='Page10__Line'>
            Central de Atendimento é atualmente uma das portas de entradas para a Casa de Bolos, é a apresentação das lojas num contexto geral, simples e objetiva, que tem o contato com os clientes via telefone, e-mail e redes sociais (Instagram, Facebook, Google e WhatsApp e em todas as plataformas que surgirem).
          </p>
          <p className='Page10__Line'>
            Todas as situações são tratadas pela equipe e repassada a respectiva loja em questão (quando necessário), que têm a disposição Manual de regras e conduta, FAQ com as principais perguntas e respostas apontadas pelos clientes e plataformas de acompanhamento de casos como sistema de gestão, emissão de cupom fiscal entre outros.
            São informações de rotina e de relação com o cliente que justificam sua manutenção, como o funcionamento das lojas no que se trata de horários e produções, encomendas, equipes, sanar dúvidas e tratar elogios, críticas construtivas reclamações e revertendo a situações problemáticas.
          </p>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={10} />
        </div>
      </div>
    </div>
  );
}