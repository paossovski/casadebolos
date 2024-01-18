import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb110 from '../../images/cdb_110.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page121 = () => {
  return(
    <div 
      id='Page121' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page121__Container'>
        <img className='Page121__Img' src={cdb110} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={121} />
        </div>
      </div>
    </div>
  );
}