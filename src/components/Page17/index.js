import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb95 from '../../images/cdb_95.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page17 = () => {
  return(
    <div 
      id='Page17' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page17__Container'>
        <p>
          <b className='Page__Text Page17__Text--Border'>
            LOCALIZAÇÃO LOJA KOBRASOL- 
          </b> &nbsp; RUA ADHEMAR DA SILVA, 711 – loja1
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Esquina da rua Adhemar da Silva com a José Firmino Novaes, em frente ao Aviamento Laço de Cetim. Sentido de quem vai para a rua central, esquina com o Restaurante Raulino´s.
        </p><br/><br/>
        <img className='Page17__Img' src={cdb95} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={17} />
        </div>
      </div>
    </div>
  );
}