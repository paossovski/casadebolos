import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb92 from '../../images/cdb_92.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page14 = () => {
  return(
    <div 
      id='Page14' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page14__Container'>
        <h1 className='Page__Text Page__Title Page__Line--Height'>
          COMO EXPLICAR PARA NOSSOS CLIENTES A LOCALIZAÇÃO     DE NOSSAS LOJAS EM FLORIANÓPOLIS E REGIÃO?
        </h1>
        <p>
          <b className='Page__Text Page14__Text--Border'>
            LOCALIZAÇÃO LOJA CENTRO 1 -
          </b> &nbsp; RUA CONSELHEIRO MAFRA, 624
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Final da Conselheiro Mafra – final da rua em direção a Ponte Hercílio Luz, próximo a prefeitura (Secretaria Municipal de Educação), entre a Rua Bento Gonçalves e a Padre Roma, casa de Esquina Rosa, na direção do terminal Rita Maria.
        </p><br/><br/>
        <img className='Page14__Img' src={cdb92} alt='' />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={14} />
        </div>
      </div>
    </div>
  );
}