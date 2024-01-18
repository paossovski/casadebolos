import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb140 from '../../images/cdb_140.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page140 = () => {
  return(
    <div 
      id='Page140' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page140__Container'>
        <div>
          <p>
            <b className='Page__Text Page140__Title--Font'>
              Nanci: Auxiliar de produção – Curitiba
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Oi, sou a Nanci  ,conheci o Murilo na empresa de comunicação  na qual ele foi meu gestor por 5 anos. Mesmo ele seguindo um novo caminho, continuamos nos falando, pois nossa amizade sempre foi muito forte e verdadeira. Sendo assim ele me surpreendeu ao chegar na minha casa me convidando me para  trabalhar na Casa de Bolos, que iria abrir em Curitiba. Claro que aceitei de imediato, mesmo sabendo que seria um desafio, um tanto  diferente da minha rotina da empresa empresa que trabalhamos anteriormente. Eu estava me recuperando de um problema de saúde sério e vi ali a oportunidade  de recomeçar, não foi fácil nos primeiros meses, desafios novos  e muita superação! Estou a dois anos aqui, tenho apreendido muito, continuo me surpreendo com minha superação, sou muito grata a Casa de Bolos e á você Murilo que em nenhum momento deixou de acreditar em mim, sonhamos juntos e venceremos, nosso sucesso está apenas no início , agradeço a Vivih á qual já conhecia muito tempo e hoje aprendo muito com ela.
          </p>
        </div>
        <div className='Page140__Content__Container'>
          <div className='Page140__Img--Align'>
            <img className='Page140__Img' src={cdb140} alt='' />
          </div>
          <div className='Page140__Text__Container'>
            <p className='Page__Text Page140__Text'>
              “Obrigada!”
            </p><br/>
            <p className='Page__Text Page140__Text--B'>
              - Nanci
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={140} />
        </div>
      </div>
    </div>
  );
}