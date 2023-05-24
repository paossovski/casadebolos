import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb25 from '../../images/cdb_25.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page32 = () => {
  return(
    <div id='Page32' className='Page Page__Container Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb25} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={32} />
        </div>
      </div>
    </div>
  );
}