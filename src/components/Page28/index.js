import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb21 from '../../images/cdb_21.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page28 = () => {
  return(
    <div 
      id='Page28' 
      className='Page Page__Container Page__Mobile Page__Margins'
    >
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb21} alt="" />
      </div><br/><br/>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={28} />
        </div>
      </div>
    </div>
  );
}