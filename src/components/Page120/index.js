import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb109 from '../../images/cdb_109.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page120 = () => {
  return(
    <div 
      id='Page120' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page120__Container'>
        <img className='Page120__Img' src={cdb109} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={120} />
        </div>
      </div>
    </div>
  );
}