import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb83 from '../../images/cdb_83.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page83 = () => {
  return(
    <div 
      id='Page83' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page83__Container'>
        <p className='Page__Text Page__Line--Height'>
          Obs: Não perca seu cadeado - é lei, todos têm e devem cuidar deles. Perdeu vai pagar um novo. R$10,00.
        </p><br/><br/><br/><br/>
        <img className='Page83__Img' src={cdb83} alt="" />
        <br/><br/><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CELULAR PESSOAL:</b> Não é permitido mexer no celular pessoal. Há exceções como doenças, ligações importantes e afins, informar a supervisão, está averiguará se há necessidade, fora isso, conforme documento de uso assinado por todos
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={83} />
        </div>
      </div>
    </div>
  );
}