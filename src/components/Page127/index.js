import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb125 from '../../images/cdb_125.png';
import cdb126 from '../../images/cdb_126.png';
import cdb127 from '../../images/cdb_127.png';
import cdb128 from '../../images/cdb_128.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page127 = () => {
  return(
    <div 
      id='Page127' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page127__Container'>
        <div className='Page127__Img__Container'>
          <img className='Page127__Img' src={cdb125} alt='' />
          <h2>
            Cantor Daniel recebendo nossos bolos das mãos da Dona Maricotinha
          </h2>
        </div>
        <div className='Page127__Img__Container'>
          <img className='Page127__Img' src={cdb126} alt='' />
          <h2>
            Nossa Campanha de Outubro (OCKTOBERCUCA)
          </h2>
        </div>
        <div className='Page127__Img__Container'>
          <img className='Page127__Img' src={cdb127} alt='' />
          <h2>
            Nossa Campanha de Novembro em incetivo a venda de bolos FIT <br/>(Novembro FIT)
          </h2>
        </div>
        <div className='Page127__Img__Container--B'>
          <img className='Page127__Img--A' src={cdb128} alt='' />
          <img className='Page127__Img--A' src={cdb128} alt='' />
          <img className='Page127__Img--A' src={cdb128} alt='' />
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={127} />
        </div>
      </div>
    </div>
  );
}