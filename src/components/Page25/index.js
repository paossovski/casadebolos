import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb18 from '../../images/cdb_18.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page25 = () => {
  return(
    <div 
      id='Page25' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page__Book__Container'>
        <h1 className='Page__Text Page25__Title'>
          VÓ SONIA TE DARÁ DICAS VALIOSAS: LEIA A HISTÓRIA
        </h1><br/>
        <img className='Page__Book__Img' src={cdb18} alt="" />
      </div><br/><br/>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={25} />
        </div>
      </div>
    </div>
  );
}