import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb84 from '../../images/cdb_84.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page84 = () => {
  return(
    <div 
      id='Page84' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page84__Container'>
        <img className='Page84__Img' src={cdb84} alt="" /><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>METAS:</b> Alguns colaboradores trabalham com remuneração extra e com metas. Isso é informado na contratação ou quando necessário. Favor verificar as informações de metas, elas são alteradas conforme período. As metas são em grupo, ou seja, todos devem colaborar para que seja atingida. As metas só ficam ativas quando os números de vendas, avaliação da loja e quantidade de problemas chega em um patamar, caso contrário estão suspensas.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>BOLO PARA  FUNCIONÁRIOS - IMPORTANTE SABER  O PORQUE O BENEFÍCIO FOI PERDIDO -</b> Até dezembro de 2018 mensalmente todos os funcionários tinham o valor estipulado três unidades de bolo baby para ser consumido em bolos para consumo pessoal, podendo comprar qualquer produto e abater do valor. 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={84} />
        </div>
      </div>
    </div>
  );
}