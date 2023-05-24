import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb86 from '../../images/cdb_86.jpg';
import cdb87 from '../../images/cdb_87.jpg';
import cdb88 from '../../images/cdb_88.jpg';
import cdb89 from '../../images/cdb_89.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page87 = () => {
  return(
    <div 
      id='Page87' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page87__Container'>
        <div className='Page87__Img__Container'>
          <img className='Page87__Img' src={cdb86} alt="" />
          <img className='Page87__Img' src={cdb87} alt="" />
        </div><br/><br/>
        <div className='Page87__Img__Container'>
          <img className='Page87__Img' src={cdb88} alt="" />
          <img className='Page87__Img' src={cdb89} alt="" />
        </div>        
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={87} />
        </div>
      </div>
    </div>
  );
}