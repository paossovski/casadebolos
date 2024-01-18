import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb106 from '../../images/cdb_106.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page117 = () => {
  return(
    <div 
      id='Page117' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page117__Container'>
        <img className='Page117__Img' src={cdb106} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={117} />
        </div>
      </div>
    </div>
  );
}