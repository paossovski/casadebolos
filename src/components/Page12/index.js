import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb08 from '../../images/cdb_08.jpg';
import cdb09 from '../../images/cdb_09.jpg';
import cdb10 from '../../images/cdb_10.jpg';

import { Numbering } from '../Numbering'; 
import { Top } from '../Top';

export const Page12 = () => {
  return(
    <div 
      id='Page12' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page12__Container'> 
        <h1 className='Page__Text Page12__Text--Align'>
          NOSSA PRIMEIRA LOJA
        </h1><br/><br/>
        <div className='Page12__Img__Container'>
          <div className='Page12__Img--Width'>
            <img className='Page12__Img' src={cdb08} alt="" />
            <h4 className='Page12__Legend'>1960</h4>
          </div>
          <div className='Page12__Img--Width'>
            <img className='Page12__Img' src={cdb09} alt="" />
            <h4 className='Page12__Legend'>2015</h4>
          </div>
        </div><br/><br/>
        <div className='Page12__Container'>
          <img className='Page12__Img__Margins' src={cdb10} alt="" />
          <h4 className='Page12__Legend'>2020</h4>
        </div><br/><br/><br/><br/>
        <div className='Page12__Text__Line'>
          <i className='Page__Text'>
            “O famoso e conhecido como <b>"O MAIS ANTIGO DIÁRIO DE SANTA CATARINA"</b> jornal <b>O ESTADO</b> por alguns anos ficou localizado bem ali em nossa <b>PRIMEIRA LOJA</b> da Conselheiro Mafra, 624.
          </i>
        </div><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='Pagination__Container'>
          <div className='Page__Up__Container'>
            <Top/>
          </div>
          <div className='Page_Numbering_Container'>
            <Numbering num={12} />
          </div>
        </div>
      </div>
    </div>
  );
}