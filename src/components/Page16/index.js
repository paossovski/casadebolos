import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb94 from '../../images/cdb_94.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page16 = () => {
  return(
    <div 
      id='Page16' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page16__Container'>
        <p>
          <b className='Page__Text Page16__Text--Border'>
            LOCALIZAÇÃO LOJA ESTREITO - 
          </b> &nbsp; RUA GENERAL LIBERATO BITTENCOURT, 1777
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Na geral do Estreito sentido bairro-centro, passa o supermercado Imperatriz, 50 metros na mesma calçada próxima esquina, loja à direita, ao lado da loja Planeta (de roupas), próximo a antiga farmácia do Sesi.
        </p><br/><br/>
        <img className='Page16__Img' src={cdb94} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={16} />
        </div>
      </div>
    </div>
  );
}