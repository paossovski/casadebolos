import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page13 = () => {
  return(
    <div 
      id='Page13' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page13__Container Page__Text'>
        <h1 className='Page13__Title'>INAUGURAÇÕES E ENDEREÇOS</h1><br/><br/>
        <p>
          ⮚ <b>07/07/2016 | CENTRO – </b><i>Florianópolis/SC</i> – Rua Conselheiro Mafra, 624
        </p><br/><br/>
        <p>
          ⮚ <b>29/03/2017 | ESTREITO – </b><i>Florianópolis/SC</i> – Rua Gen. Liberato Bitencourt, 1777
        </p><br/><br/>
        <p>
          ⮚	<b>15/05/2018 | CENTRO 2 – </b><i>Florianópolis/SC</i> – Rua Anita Garibaldi, 128 Centro
        </p><br/><br/>
        <p>
          ⮚	<b>15/05/2019 | KOBRASOL – </b><i>São José/SC</i> – Rua Adhemar da Silva, 711 loja 01
        </p><br/><br/>
        <p>
          ⮚	<b>02/07/2021 | MAURO RAMOS – </b><i>Florianópolis/SC</i> – Avenida Mauro Ramos, 1225 - Centro (Loja inicialmente em Palhoça, mudou para Mauro Ramos). 
        </p><br/><br/>
        <p>
          ⮚	<b>02/12/2020 | CURITIBA/PR – </b><i>Centro</i> – Rua Cândido Lopes, 223 – Loja 8 – Centro
        </p><br/><br/>
        <p>
          ⮚	<b>12/07/2022 | CURITIBA/PR – </b><i>Novo Mundo</i> – Rua São Judas Tadeu, 22 – Loja 11 - esquina com Avenida Brasilia, 6518 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={13} />
        </div>
      </div>
    </div>
  );
}