import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb101 from '../../images/cdb_101.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page112 = () => {
  return(
    <div 
      id='Page112' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page112__Container'>
        <img className='Page112__Img' src={cdb101} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={112} />
        </div>
      </div>
    </div>
  );
}