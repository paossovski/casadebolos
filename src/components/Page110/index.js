import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb99 from '../../images/cdb_99.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page110 = () => {
  return(
    <div 
      id='Page110' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page110__Container'>
        <img className='Page110__Img' src={cdb99} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={110} />
        </div>
      </div>
    </div>
  );
}