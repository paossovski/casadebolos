import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb100 from '../../images/cdb_100.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page111 = () => {
  return(
    <div 
      id='Page111' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page111__Container'>
        <img className='Page111__Img' src={cdb100} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={111} />
        </div>
      </div>
    </div>
  );
}