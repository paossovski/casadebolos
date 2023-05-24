import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb47 from '../../images/cdb_47.jpg';
import cdb48 from '../../images/cdb_48.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page49 = () => {
  return(
    <div 
      id='Page49' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page49__Container'>
        <p className='Page__Text Page49__Text'>CARTÃO FIDELIDADE FLORIPA</p>
        <img className='Page49__Img' src={cdb47} alt="" /><br/><br/>
        <p className='Page__Text Page49__Text'>CARTÃO FIDELIDADE CURITIBA</p>
        <img className='Page49__Img' src={cdb48} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Fidelidade tem que preencher completo o -  CADASTRO FIDELIDADE. 
          </b> Para o cliente retirar a cortesia, é necessário preencher o cadastro com <b>todos os dados</b>, tendo o máximo possível de informações. Principalmente, com a data de aniversário. São comuns cadastros incompletos, isso prejudica complementar o banco de informações de clientes. 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={49} />
        </div>
      </div>
    </div>
  );
}