import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb30 from '../../images/cdb_30.jpg';
import cdb31 from '../../images/cdb_31.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page37 = () => {
  return(
    <div 
      id='Page37'
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page37__Container'>
        <h1 className='Page__Text Page37__Text'>NOSSAS BASES</h1><br/><br/>
        <img className='Page37__Img' src={cdb30} alt="" /><br/><br/>
        <img className='Page37__Img' src={cdb31} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={37} />
        </div>
      </div>
    </div>
  );
}