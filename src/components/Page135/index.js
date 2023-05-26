import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb135 from '../../images/cdb_135.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page135 = () => {
  return(
    <div 
      id='Page135' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page135__Container'>
        <div>
          <p>
            <b className='Page__Text Page135__Title--Font'>
              Lara: Auxiliar administrativa – Estreito
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Oi eu sou a Lara ketley, tenho 24 anos e cheguei aqui em Floripa em 2019 e desde quando cheguei fui me encantando cada vez mais e assim fui á procura de emprego. E neste dia entreguei 30 currículos e um desses currículos foi na Casa de Bolos na Conselheiro Mafra e fui bem atendida pela atendente Jacque, ela falou que ia olhar com carinho e ia entrar em contato e assim que pudesse. Então esqueci e fui para a casa e no dia seguinte para a minha surpresa recebi uma mensagem, dizendo se eu tinha disponibilidade para uma entrevista e logo de cara aceitei, depois de dois dias fui chamada para fazer um teste e assim estou eu até hoje com 2 anos e alguns meses e fui passando por vários setores e recebendo várias oportunidades aonde eu estou agora que é na parte da área administrativa, já passei por algumas lojas e fui conhecendo cada pessoa que trabalha na equipe Casa de Bolos Floripa, assim fui criando um carinho por cada uma, só tenho que agradecer pela oportunidade que me deram pois foi aqui na Casa de Bolos que eu cresci e continuo crescendo, aprendi e continuo aprendendo muitas coisas.
          </p>
        </div>
        <div className='Page135__Content__Container'>
          <div className='Page135__Img--Align'>
            <img className='Page135__Img' src={cdb135} alt='' />
          </div>
          <div className='Page135__Text__Container'>
            <p className='Page__Text Page135__Text'>
              “Um xerooooo no cangote. Só gratidão!”         
            </p><br/>
            <p className='Page__Text Page135__Text--B'>
              - Lara
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={135} />
        </div>
      </div>
    </div>
  );
}