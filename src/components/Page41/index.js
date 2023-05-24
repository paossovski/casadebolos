import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb34 from '../../images/cdb_34.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page41 = () => {
  return(
    <div 
      id='Page41' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page41__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>PLAQUINHAS DE IDENTIFICAÇÃO NO BALCÃO OBRIGATÓRIAS:</b> As lojas do Centro (1 e 2)  de Florianópolis   pela rotatividade em vendas não são obrigadas a utilizar dentro do balcão placas de identificação de bolos, exceto bolos diet, e funcionais. Nas demais lojas o uso de placas em todos os bolos é OBRIGATÓRIA. Confira as plaquinhas de sua loja, separe, limpe e organize e use. Não espere ser cobrado sobre o uso.
        </p><br/><br/>
        <img className='Page41__Img' src={cdb34} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={41} />
        </div>
      </div>
    </div>
  );
}