import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb136 from '../../images/cdb_136.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page136 = () => {
  return(
    <div 
      id='Page136' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page136__Container'>
        <div>
          <p>
            <b className='Page__Text Page136__Title--Font'>
              Lucilene: Boleira – Estreito
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Me chamo Lucilene, conhecida por todos como Lu. Um dia normal como qualquer outro, eu sai de casa pra colocar currículo atrás de emprego, ví o estabelecimento e deixei o meu currículo, passado uns dias fui chamada pela Jacqueline, ela fez a entrevista comigo, depois de um dia eu fui chamada para começar a trabalhar, iniciei na produção de potes, coberturas e auxiliava no atendimento, hoje as coisas mudaram graças a Deus, mais lojas e mais produção, e é por esse motivo que hoje eu me dedico somente a área de produção, e lá estou há mais de 5 anos, até os dias de hoje.
          </p>
        </div>
        <div className='Page136__Content__Container'>
          <div className='Page136__Img--Align'>
            <img className='Page136__Img' src={cdb136} alt='' />
          </div>
          <div className='Page136__Text__Container'>
            <p className='Page__Text Page136__Text'>
            </p><br/>
            <p className='Page__Text Page136__Text--B'>
            - Lucilene
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={136} />
        </div>
      </div>
    </div>
  );
}