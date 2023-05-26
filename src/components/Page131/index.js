import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb131 from '../../images/cdb_131.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page131 = () => {
  return(
    <div 
      id='Page131' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page131__Container'>
        <div className='Page131__Content__Container'>
          <div className='Page131__Img--Align'>
            <img className='Page131__Img' src={cdb131} alt='' />
          </div>
          <div className='Page131__Text__Container'>
            <p className='Page__Text Page131__Text'>
              “Não desista de você e de seus sonhos, insista e persista! - O começo é árduo, mas a conquista é gratificante”
            </p><br/>
            <p className='Page__Text Page131__Text--B'>
              - Tânia Adrieli Becker Ossovski
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={131} />
        </div>
      </div>
    </div>
  );
}