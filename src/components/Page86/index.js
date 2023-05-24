import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb85 from '../../images/cdb_85.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page86 = () => {
  return(
    <div 
      id='Page86' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page86__Container'>
        <img className='Page86__Img' src={cdb85} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={86} />
        </div>
      </div>
    </div>
  );
}