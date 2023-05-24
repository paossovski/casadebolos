import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb13 from '../../images/cdb_13.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page23 = () => {
  return(
    <div 
      id='Page23' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page23__Container'>
        <img className='Page23__Img' src={cdb13} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={23} />
        </div>
      </div>
    </div>
  );
}