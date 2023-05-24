import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb107 from '../../images/cdb_107.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page118 = () => {
  return(
    <div 
      id='Page118' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page118__Container'>
        <img className='Page118__Img' src={cdb107} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={118} />
        </div>
      </div>
    </div>
  );
}