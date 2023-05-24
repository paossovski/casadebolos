import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb24 from '../../images/cdb_24.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page31 = () => {
  return(
    <div 
      id='Page31' 
      className='Page Page__Container Page__Mobile Page__Margins'
    >
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb24} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={31} />
        </div>
      </div>
    </div>
  );
}