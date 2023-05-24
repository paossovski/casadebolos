import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb19 from '../../images/cdb_19.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page26 = () => {
  return(
    <div 
      id='Page26' 
      className='Page Page__Container Page__Mobile Page__Margins'
    >
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb19} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={26} />
        </div>
      </div>
    </div>
  );
}