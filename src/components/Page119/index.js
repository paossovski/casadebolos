import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb108 from '../../images/cdb_108.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';
 
export const Page119 = () => {
  return(
    <div 
      id='Page119' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page119__Container'>
        <img className='Page119__Img' src={cdb108} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={119} />
        </div>
      </div>
    </div>
  );
}