import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb79 from '../../images/cdb_79.jpg';
import cdb80 from '../../images/cdb_80.jpg';
import cdb81 from '../../images/cdb_81.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page81 = () => {
  return(
    <div 
      id='Page81' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page81__Container'>
        <div className='Page81__Img__Container'>
          <img className='Page81__Img' src={cdb79} alt="" />
          <img className='Page81__Img' src={cdb80} alt="" />
          <img className='Page81__Img' src={cdb81} alt="" />
        </div><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Esse QRCODE no crachá ele direciona o cliente até o whatsapp da loja, ou seja se o cliente quiser fazer contato com a gente, só direcionar o celular pro QRCODE.</b>
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>UNHA PINTADA E ACESSÓRIOS:</b> É proibido o uso de esmalte, brincos, colares e anéis, durante o expedinte de trabalho, além de ser uma regra interna da empresa é uma exigência da vigilância sanitária, ou seja, o colaborador (a) que for contra a regra, pode ser advertido (a) e se acontecer mais de uma vez, pode ser suspendido(a).
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={81} />
        </div>
      </div>
    </div>
  );
}