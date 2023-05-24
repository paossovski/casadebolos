import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb104 from '../../images/cdb_104.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page115 = () => {
  return(
    <div 
      id='Page115' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page115__Container'>
        <img className='Page115__Img' src={cdb104} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={115} />
        </div>
      </div>
    </div>
  );
}