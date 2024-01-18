import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb36 from '../../images/cdb_36.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page43 = () => {
  return(
    <div 
      id='Page43' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page43__Container'>
        <h1 className='Page__Text Page43__Text'>
          LAYOUT DE DISPONIBILIZAÇÃO DE BOLOS <br/> DENTRO DO BALCÃO
        </h1><br/><br/>
        <img className='Page43__Img' src={cdb36} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          A partir do lançamento desta versão deste manual, o balcão será organizado de forma padronizada nas lojas. ou seja, independente da loja que o cliente for, encontrará os bolos no balcão com a mesma ‘carinha’. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          ⮚	O Kobrasol seguirá a mesma montagem, a única diferença é que os bolos com coberturas ficarão dentro do balcão. 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={43} />
        </div>
      </div>
    </div>
  );
}