import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb02 from '../../images/cdb_02.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page04 = () => {
  return(
    <div 
      id='Page04' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page04__Img__Container'>
        <img className='Page04__Img' src={cdb02} alt="" />
      </div><br/><br/>
      <div className='Page04__Text__Container'>
        <div className='Page__Text'>

          <p className='Page__Text Page04__Title'>MISSÃO, VISÃO E VALORES</p>
          <br/><br/><br/>
          <p className='Page__Text Page04__Title'>MISSÃO</p><br/><br/>
          <p className='Page__Text Page04__Title--Align Page__Line--Height'>
            "Oferecer às pessoas produtos de qualidade, que garantam sua satisfação, agregando sabor e valor às suas vidas, trazendo à lembrança, as coisas que são realmente importantes."
          </p><br/><br/>
          <p className='Page__Text Page04__Title'>VISÃO</p><br/><br/>
          <p className='Page__Text Page04__Title--Align Page__Line--Height'>
            Ser referência em bolos caseiros. Ser exemplo em condutas e processos. Ser inspiração para o resgate de valores, construindo pontes entre as pessoas.
          </p><br/><br/>
          <p className='Page__Text Page04__Title'>VALORES</p><br/><br/>
          <p className='Page__Text Page04__Title--Align Page__Line--Height'>
            <i className='Page__Text Page04__Title--Align'>SIMPLICIDADE:</i> optar pelo simples é escolher um caminho para a felicidade; <br/>
            <i className='Page__Text Page04__Title--Align'>FAMÍLIA:</i> a razão do nosso sucesso;<br/>
            <i className='Page__Text Page04__Title--Align'>HUMILDADE:</i> crescer sem perder a essência.
          </p>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={4} />
        </div>
      </div>
    </div>
  );
}