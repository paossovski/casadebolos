import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb33 from '../../images/cdb_33.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page40 = () => {
  return(
    <div 
      id='Page40' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page40__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>GELADEIRA DE POTES:</b> Observar e organizar sempre a geladeira de potes. Não esqueça de ligar a luz da geladeira. Não deixe a porta molhada, suada, potes desorganizados ou sujos. - sempre colocar a data de validade e reorganizar isso diariamente, conferindo a qualidade e a aparência dos potes. Bolos no pote com data mais avançada seguir a regra de descontos (sempre com autorização da supervisão).
        </p><br/>
        <img className='Page40__Img' src={cdb33} alt="" />
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={40} />
        </div>
      </div>
    </div>
  );
}