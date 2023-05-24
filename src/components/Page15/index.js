import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb93 from '../../images/cdb_93.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page15 = () => {
  return(
    <div 
      id='Page15' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page15__Container'>
        <p>
          <b className='Page__Text Page15__Text--Border'>
            LOCALIZAÇÃO LOJA CENTRO 2- 
          </b> &nbsp; RUA ANITA GARIBALDI, 128
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Próximo a Catedral e Câmara de Vereadores, lado direito da Rua em   direção à Avenida Hercílio Luz.
        </p><br/><br/>
        <img className='Page15__Img' src={cdb93} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={15} />
        </div>
      </div>
    </div>
  );
}