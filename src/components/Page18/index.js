import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb96 from '../../images/cdb_96.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page18 = () => {
  return(
    <div 
      id='Page18' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page18__Container'>
        <p>
          <b className='Page__Text Page18__Text--Border'>
            LOCALIZAÇÃO LOJA CENTRO 3 – 
          </b> &nbsp; AVENIDA MAURO RAMOS, 1225
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Próximo ao posto de gasolina J Cristóvão (aquele que forma fila na frente) e quase na frente da Igreja Universal.
        </p><br/><br/>
        <img className='Page18__Img' src={cdb96} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={18} />
        </div>
      </div>
    </div>
  );
}