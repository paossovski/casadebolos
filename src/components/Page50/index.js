import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb49 from '../../images/cdb_49.jpg';
import cdb50 from '../../images/cdb_50.jpg';
import cdb51 from '../../images/cdb_51.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page50 = () => {
  return(
    <div 
      id='Page50' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page50__Container'>
        <img className='Page50__Img--A' src={cdb49} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Exceção:</b> Cartão vencido no mês, pode ser trocado até o último dia do mês, mas explique isso ao cliente.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CARTÃO PRESENTE:</b> Sabe aquele cliente que chega na loja pra comprar um bolo de presente para alguém especial e não sabe o que levar? Ofereça   nosso cartão presente, ele paga o valor R$ e a pessoa vai até nossa loja e faz a troca desse cartão: Lembrando que esta opção é válida somente para as lojas de Florianópolis e São José.
        </p><br/><br/>
        <div className='Page50__Img__Container'>
          <img className='Page50__Img--B' src={cdb50} alt="" />
          <img className='Page50__Img--B' src={cdb51} alt="" />
        </div><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>BOLOS RENTÁVEIS: <i>Precisam ser os primeiros a serem oferecidos à venda para o cliente.</i></b> Boleiras devem prestar atenção para que estes bolos sejam sempre produzidos; No caso de trocas por fidelidades oferecer   os bolos rentáveis. Como saber quais são? Estão em nossa planilha de produção nomeados com RENTÁVEIS ao lado.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={50} />
        </div>
      </div>
    </div>
  );
}