import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb29 from '../../images/cdb_29.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page36 = () => {
  return(
    <div id='Page36' className='Page Page__Container Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb29} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={36} />
        </div>
      </div>
    </div>
  );
}