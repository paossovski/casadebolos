import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb105 from '../../images/cdb_105.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page116 = () => {
  return(
    <div 
      id='Page116' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page116__Container'>
        <img className='Page116__Img' src={cdb105} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={116} />
        </div>
      </div>
    </div>
  );
}