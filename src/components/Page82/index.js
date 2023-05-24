import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb82 from '../../images/cdb_82.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page82 = () => {
  return(
    <div 
      id='Page82' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page82__Container'>
        <img className='Page82__Img' src={cdb82} alt="" /><br/><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>VOU COLOCAR TODO O UNIFORME, BATER O PONTO E DEPOIS COLOCO MEU CHINELINHO, POSSO?</b> Não, não pode. Um dia você vai esquecer e bater a foto do intervalo de chinelo, e vai invalidar seu ponto de entrada.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <i>IMPORTANTE:</i> de maneira alguma usar chinelo, rasteirinhas, mule, sapato com salto, shorts, bermuda e somente tirar a touca quando sair da loja.
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>ARMÁRIOS PESSOAIS DA EQUIPE:</b> Pertences pessoais devem ser guardados nos armários, que devem estar identificados com o nome de cada funcionário e ter cadeados. Cada armário deve conter o nome de cada colaboradora e o cadeado. Cuide disso!
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={82} />
        </div>
      </div>
    </div>
  );
}