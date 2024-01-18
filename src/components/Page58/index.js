import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page58 = () => {
  return(
    <div 
      id='Page58' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page58__Container'>
        <p className='Page__Text Page58__Text--Color--A'>
          <b>●	MAURO RAMOS</b><br/>
          Externo (para o cliente) – (48) 3091-5070 | (48) 99180-5070<br/> 
          Interno (comunicação entre lojas) – (48) 3209-0243<br/> E-mail: &nbsp;
          <a className='Page58__Ancora' href='florianopolis@casadebolos.com.br'>
            florianopolis@casadebolos.com.br
          </a>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Vale ressaltar que temos na nossa linha telefônica uma Central de Atendimento, devemos estimular o cliente entrar em contato sempre por este canal (48) 3091-5070. Por mais que as outras linhas telefônicas sejam tratadas da mesma maneira, é importante ressaltar o telefone principal de contato. Na Central de Atendimento, cada loja possui seu ramal, ou seja, o cliente escuta mensagem grava e disca o número conforme a loja que deseja falar. Sendo eles:
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>⮚&nbsp; CENTRAL DE ATENDIMENTO ILHA: 01</b><br/>
          <b>⮚&nbsp;CENTRAL DE ATENDIMENTO CONTINENTE: 02</b><br/>
          <b className='Page58__Text--Color--B'>
            ⮚&nbsp; CONSELHEIRO MAFRA: 03
          </b><br/>
          <b className='Page58__Text--Color--C'>
            ⮚&nbsp; ANITA GARIBALDI: 04
          </b><br/>
          <b className='Page58__Text--Color--D'>
            ⮚&nbsp; MAURO RAMOS: 05
          </b><br/>
          <b className='Page58__Text--Color--E'>
            ⮚&nbsp; ESTREITO: 06
          </b><br/>
          <b className='Page58__Text--Color--F'>
            ⮚&nbsp; KOBRASOL: 07
          </b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height Page58__Text--Color--G'>
          <b>●	CENTRO DE CURITIBA</b><br/>
          Externo (para o cliente) – (41) 3503-9650<br/> 
          Interno (comunicação entre lojas) – (41) 3503-9650 | (41) 98803-1002<br/> E-mail: &nbsp; 
          <a 
            className='Page58__Ancora' 
            href='curitibacentro@casadebolos.com.br'>
            curitibacentro@casadebolos.com.br
          </a>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height Page58__Text--Color--G'>
          <b>●	NOVO MUNDO -  CURITIBA</b><br/>
          Externo (para o cliente) – (41) 3019-2223<br/>
          Interno (comunicação entre lojas) – (41) 3019-2223 | (41) 98803-1002<br/> E-mail: &nbsp; 
          <a 
            className='Page58__Ancora' 
            href='novomundoexpress@casadebolos.com.br'>
            novomundoexpress@casadebolos.com.br
          </a>
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={58} />
        </div>
      </div>
    </div>
  );
}