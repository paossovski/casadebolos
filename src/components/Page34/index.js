import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb27 from '../../images/cdb_27.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page34 = () => {
  return(
    <div id='Page34' className='Page Page__Container Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb27} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={34} />
        </div>
      </div>
    </div>
  );
}