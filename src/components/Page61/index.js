import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb62 from '../../images/cdb_62.jpg';
import cdb63 from '../../images/cdb_63.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page61 = () => {
  return(
    <div 
      id='Page61' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page61__Container'>
        <p className='Pgae__Text Page__Line--Height'>
          <b>BOLOS FORA DO PADRÃO, TEM UM ESPAÇO NA PRATELEIRA PARA SEPARAR.</b>
        </p>
        <p className='Page__Text Page__Line--Height'>
          Fazemos sempre vistoria nas lojas na produção de bolos com pesagem e cliente oculto para avaliar o padrão de qualidade. Bolos fora do padrão, deixar no espaço reservado na prateleira, registrem em foto no  final do dia e envie ao grupo de WhatsApp correspondente.
        </p><br/><br/>
        <img className='Page61__Img--A' src={cdb62} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>PERDAS</b><br/>
          Quando houver perda de produtos que seja superior ao normal (Exemplo: Ovos, iogurte, frutas em geral), ANOTAR NA PLANILHA - É IMPORTANTE RELATAR E NÃO ESCONDER. Esconder causará prejuízos a todos da equipe e desfalque no estoque.
        </p><br/><br/>
        <img className='Page61__Img--B' src={cdb63} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={61} />
        </div>
      </div>
    </div>
  );
}
