import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb122 from '../../images/cdb_122.png';
import cdb123 from '../../images/cdb_123.png';
import cdb124 from '../../images/cdb_124.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page126 = () => {
  return(
    <div 
      id='Page126' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page126__Container'>
        <div className='Page126__Title__Container'>
          <h1 className='Page__Text Page126__Text--Font'>Fotos</h1>
        </div>
        <div className='Page126__Img__Container Page126__Img__Align--A'>
          <div>
            <img className='Page126__Img' src={cdb122} alt="" />
            <h2>
              Conselho de Franqueados Casa de Bolos
            </h2>
          </div>
        </div>
        <div className='Page126__Img__Container Page126__Img__Align--B'>
          <div>
            <img className='Page126__Img' src={cdb123} alt="" />
            <h2>
              Equipe em clima de  festa junina
            </h2>
          </div>
        </div>
        <div className='Page126__Img__Container Page126__Img__Align--A'>
          <div>
            <img className='Page126__Img' src={cdb124} alt="" />
            <h2>
              Entrega do troféu e Placa Grand Prix – LOJA DIAMANTE  
            </h2>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={126} />
        </div>
      </div>
    </div>
  );
}