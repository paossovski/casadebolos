import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page70 = () => {
  return(
    <div 
      id='Page70' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page70__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>Informações complementares:</b>
        </p>
        <p className='Page__Text Page__Line--Height'>
          ⮚	Cargo/função;<br/>
          ⮚	Horário de trabalho;<br/>
          ⮚	Data de início – admissão;<br/>
          ⮚	Grau de escolaridade;<br/>
          ⮚	Estado civil.
        </p><br/><br/>
        <p className='Page__Text'>
          Apenas após a entregada desta documentação é possível inciar o processo de registro, junto à contabilidade. 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={70} />
        </div>
      </div>
    </div>
  );
}