import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb35 from '../../images/cdb_35.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page42 = () => {
  return(
    <div 
      id='Page42' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page42__Container'>
        <p className='Page__Text'>
          <b className='Page42__Text'>Entre 10h e 16h é importantíssimo ter o balcão bem completo.</b> 
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          No final do dia, retire o excesso às 17h45, deixe o balcão pela metade, e às 18h as 18h30 apenas 1 prateleira com bolos. Ao levar os bolos para dentro da cozinha, não deixe a prateleira do campo de visão dos clientes.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>BOLOS MONTADOS EM CIMA DO BALCÃO:</b> (Exceto à loja Kobrasol, os bolos montados são dentro  do balcão, uma exigência da Vigilância Sanitária municipal).É importante ver se a tampa plástica não está suada, se o bolo está identificado e com data de validade. <b>SEMPRE
          </b> ter nem que seja o mínimo de variedades de bolos montados (Toalha Felpuda, Churros, Bem- Casado...) no balcão. / NUNCA COLAR ETIQUETA EM CIMA DE OUTRA ETIQUETA MAIS ANTIGA. E manter bolos com coberturas <b>COM FREQUÊNCIA</b>. (Em Curitiba foi estipulado o minimo de 15 bolos)  Analisar quais bolos mais vendem com coberturas e deixá-los prontos no balcão! <b>UTILIZE</b> sempre que tiver disponivel as tampas Premium (lisas). 
        </p><br/><br/>
        <img className='Page42__Img' src={cdb35} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={42} />
        </div>
      </div>
    </div>
  );
}