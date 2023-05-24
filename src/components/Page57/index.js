import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page57 = () => {
  return(
    <div 
      id='Page57' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page57__Container'>
        <p className='Page__Text Page57__Text--Align'>
          <b className='Page57__Text--Size'>COMUNICAÇÃO ENTRE LOJAS E COM CLIENTE</b>
        </p><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>●	CENTRAL DE ATENDIMENTO</b><br/>
          Externo (para o cliente) – (48) 3091-5070 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771- 5287 | (48) 3209 - 0243 <br/> E-mail: &nbsp; 
          <a 
            href='continenteflorianopolis@casadebolos.com.br'
            className='Page57__Ancora'
          >
            continenteflorianopolis@casadebolos.com.br
          </a>
        </p><br/>
        <p className='Page__Text Page57__Text--Color--A'>
          <b>●	CONSELHEIRO MAFRA</b><br/>
          Externo (para o cliente) – (48) 3209-904 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771-3974 | (48) 3771-3974<br/> E-mail: &nbsp; 
          <a 
            href='centroflorianopolis@casadebolos.com.br'
            className='Page57__Ancora'
          >
            centroflorianopolis@casadebolos.com.br
          </a>
        </p><br/>
        <p className='Page__Text Page57__Text--Color--B'>
          <b>●	ANITA GARIBALDI</b><br/>
          Externo (para o cliente) – (48) 3039-1050 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771-8931 | (48) 99179-1050<br/> E-mail: &nbsp; 
          <a 
            href='centroflorianopolis2@casadebolos.com.br'
            className='Page57__Ancora'
          >
            centroflorianopolis2@casadebolos.com.br
          </a>
        </p><br/>
        <p className='Page__Text Page57__Text--Color--C'>
          <b>●	ESTREITO</b><br/>
          Externo (para o cliente) – (48) 3091-5070 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771-5287 | (48) 3771-5287<br/> E-mail: &nbsp;
          <a 
            href='continenteflorianopolis@casadebolos.com.br'
            className='Page57__Ancora'
          >
            continenteflorianopolis@casadebolos.com.br
          </a>
        </p><br/>
        <p className='Page__Text Page57__Text--Color--D'>
          <b>●	KOBRASOL</b><br/>
          Externo (para o cliente) – (48) 3015-7010 | (48) 99180-5070<br/>
          Interno (comunicação entre lojas) – (48) 3771-9637 | (48) 99147-2075<br/> E-mail: &nbsp;
          <a 
            href='kobrasol@casadebolos.com.br'
            className='Page57__Ancora'
          >
            kobrasol@casadebolos.com.br
          </a>
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={57} />
        </div>
      </div>
    </div>
  );
}