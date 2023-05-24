import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb60 from '../../images/cdb_60.jpg';
import cdb61 from '../../images/cdb_61.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page60 = () => {
  return(
    <div 
      id='Page60' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page60__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>DICA PARA CORTAR A CENOURA:</b><br/>
          Ao cortar a cenoura para guardar no refrigerador, os cortes deverão ser feitos com no máximo um dedo de espessura por rodela, assim evitaremos a quebra constate dos liquidificadores: 
        </p>
      </div>
      <div className='Page60__Img__Container'>
        <div className='Page60__Title__Container'>
          <h3 className='Page__Text Page60__Img--Title'>COMO NÃO FAZER:</h3>
          <img className='Page60__Img' src={cdb60} alt="" />
        </div>
        <div className='Page60__Title__Container'>
          <h3 className='Page__Text Page60__Img--Title'>COMO FAZER:</h3>
          <img className='Page60__Img' src={cdb61} alt="" />
        </div>
      </div>
      <p className='Page__Text Page__Line--Height'>
        <b className='Page60__Background--Color'>SÁBADO</b><br/>
        <b>O TEMPO DE VENDA É PEQUENO -</b> importante agilizar as montagens de bolos, e por isso chame alguém para lhe ajudar e cuidar do desenforme e a separação das encomendas, já cobrindo os bolos, e embalando e deixando-os na área de atendimento para agilizar a entrega.
      </p>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={60} />
        </div>
      </div>
    </div>
  );
}