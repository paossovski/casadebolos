import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb37 from '../../images/cdb_37.jpg';
import cdb38 from '../../images/cdb_38.jpg';
import cdb39 from '../../images/cdb_39.jpg';
import cdb40 from '../../images/cdb_40.jpg';
import cdb41 from '../../images/cdb_41.jpg';
import cdb42 from '../../images/cdb_42.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page44 = () => {
  return(
    <div 
      id='Page44' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page44__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>VENDA DE VELAS, BOLOBAG, CAIXA PRESENTE E EMBALAGENS:</b> Estimular <b>SEMPRE</b> a venda de itens complementares, aumenta nosso ticket médio. Sempre que for vender, anotar na planilha de produção diária. Especificar o que foi vendido. E sempre que necessário, repor esses itens na área de atendimento.
        </p><br/><br/>
        <div className='Page44__Container__ImgA'>
          <img className='Page44__Img--cdb37' src={cdb37} alt="" />
          <img className='Page44__Img--cdb38' src={cdb38} alt="" />
          <img className='Page44__Img--cdb39' src={cdb39} alt="" />
        </div><br/><br/>
        <div className='Page44__Container__ImgB'>
          <img className='Page44__Img--cdb40' src={cdb40} alt="" />
          <img className='Page44__Img--cdb41' src={cdb41} alt="" />
          <img className='Page44__Img--cdb42' src={cdb42} alt="" />
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={44} />
        </div>
      </div>
    </div>
  );
}