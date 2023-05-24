import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb114 from '../../images/cdb_114.png';
import cdb115 from '../../images/cdb_115.png';
import cdb116 from '../../images/cdb_116.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page123 = () => {
  return(
    <div 
      id='Page123' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page123__Container'>
        <div className='Page123__Title__Container'>
          <h1 className='Page__Text Page123__Text--Font'>Fotos</h1>
        </div>
        <div className='Page123__Img__Container Page123__Img__Align--A'>
          <div>
            <img className='Page123__Img' src={cdb114} alt="" />
            <h2>
              Maricotinha no auge da novela A Dona do Pedaço
            </h2>
          </div>
        </div>
        <div className='Page123__Img__Container Page123__Img__Align--B'>
          <div>
            <img className='Page123__Img' src={cdb115} alt="" />
            <h2>
              Maricotinha marcando presença numa das lojas
            </h2>
          </div>
        </div>
        <div className='Page123__Img__Container Page123__Img__Align--A'>
          <div>
            <img className='Page123__Img' src={cdb116} alt="" />
            <h2>
              Maricotinha marcando presença em mais uma loja
            </h2>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={123} />
        </div>
      </div>
    </div>
  );
}