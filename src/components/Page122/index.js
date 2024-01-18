import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb111 from '../../images/cdb_111.png';
import cdb112 from '../../images/cdb_112.png';
import cdb113 from '../../images/cdb_113.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page122 = () => {
  return(
    <div 
      id='Page122' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page122__Container'>
        <div className='Page122__Title__Container'>
          <h1 className='Page__Text Page122__Text--Font'>Fotos</h1>
        </div>
        <div className='Page122__Img__Container Page122__Img__Align--A'>
          <div>
            <img className='Page122__Img' src={cdb111} alt="" />
            <h2>
              Reconhecimento em qualidade e tecnologia
            </h2>
          </div>
        </div>
        <div className='Page122__Img__Container Page122__Img__Align--B'>
          <div>
            <img className='Page122__Img' src={cdb112} alt="" />
            <h2>
              Feitos com amor e carinho
            </h2>
          </div>
        </div>
        <div className='Page122__Img__Container Page122__Img__Align--A'>
          <div>
            <img className='Page122__Img' src={cdb113} alt="" />
            <h2>
              Produzidos de forma caseira e artesanal
            </h2>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={122} />
        </div>
      </div>
    </div>
  );
}