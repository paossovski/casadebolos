import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb04 from '../../images/cdb_04.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page08 = () => {
  return(
    <div 
      id='Page08' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page08__Container'>
        <div className='Page__Text Page08__Text--Margins'>
          <i className='Page__Text Page__Line--Height'>
            Todas as Marias da Paz, a minha vó, a Vó Sônia e a todas as boleiras e boleiros dignos, a lição que fica é que que vale a pena lutar, a   sentir orgulho das origens e que fazer bolo é um gesto de amor porque é simples ser feliz.
          </i><br/><br/><br/><br/>
          <i className='Page__Text Page08__Text--Italic'>-Murilo Bonucci</i>
        </div>
        <div className='.Page08__Img__Container'>
          <img className='Page08__Img' src={cdb04} alt="" />
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={8} />
        </div>
      </div>
    </div>
  );
}