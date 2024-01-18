import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb128 from '../../images/cdb_128.png';
import cdb129 from '../../images/cdb_129.png';
import cdb130 from '../../images/cdb_130.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page128 = () => {
  return(
    <div 
      id='Page128' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page128__Container'>
        <div className='Page128__Img__Container'>
          <img className='Page128__Img--B' src={cdb128} alt='' />
          <img className='Page128__Img--B' src={cdb128} alt='' />
          <img className='Page128__Img--B' src={cdb128} alt='' />
        </div>
        <div className='Page128__Legend__Container'>
          <h2>
              <b>QR CODE PARA AVALIAÇÃO NO GOOGLE</b>
          </h2>
        </div><br/><br/><br/><br/>
        <div className='Page128__Img__Container'>
          <img className='Page128__Img' src={cdb129} alt='' />
          <img className='Page128__Img' src={cdb130} alt='' />
        </div>
        <div className='Page128__Legend__Container'>
          <h2>
            Essa era a parede de fotos antigas que tinha nos primeiros meses da Loja da Conselheiro Mafra.
          </h2>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={128} />
        </div>
      </div>
    </div>
  );
}