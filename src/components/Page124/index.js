import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb117 from '../../images/cdb_117.png';
import cdb118 from '../../images/cdb_118.png';
import cdb119 from '../../images/cdb_119.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page124 = () => {
  return(
    <div 
      id='Page124' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page124__Container'>
        <div className='Page124__Title__Container'>
          <h1 className='Page__Text Page124__Text--Font'>Fotos</h1>
        </div>
        <div className='Page124__Img__Container Page124__Img__Align--A'>
          <div>
            <img className='Page124__Img' src={cdb117} alt="" />
            <h2>
              Equipe reunida
            </h2>
          </div>
        </div>
        <div className='Page124__Img__Container Page124__Img__Align--B'>
          <div>
            <img className='Page124__Img' src={cdb118} alt="" />
            <h2>
              Confraternização 2019
            </h2>
          </div>
        </div>
        <div className='Page124__Img__Container Page124__Img__Align--A'>
          <div>
            <img className='Page124__Img' src={cdb119} alt="" />
            <h2>
              Equipe reunida mais uma vez
            </h2>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={124} />
        </div>
      </div>
    </div>
  );
}