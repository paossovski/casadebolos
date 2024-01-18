import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb103 from '../../images/cdb_103.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page114 = () => {
  return(
    <div 
      id='Page114' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page114__Container'>
        <img className='Page114__Img' src={cdb103} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={114} />
        </div>
      </div>
    </div>
  );
}