import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb23 from '../../images/cdb_23.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page30 = () => {
  return(
    <div 
      id='Page30' 
      className='Page Page__Container Page__Mobile Page__Margins'
    >
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb23} alt="" />
      </div><br/><br/>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={30} />
        </div>
      </div>
    </div>
  );
}