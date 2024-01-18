import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb20 from '../../images/cdb_20.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page27 = () => {
  return(
    <div 
      id='Page27' 
      className='Page Page__Container Page__Mobile Page__Margins'
    >
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb20} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={27} />
        </div>
      </div>
    </div>
  );
}