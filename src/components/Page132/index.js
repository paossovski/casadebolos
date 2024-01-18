import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb132 from '../../images/cdb_132.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page132 = () => {
  return(
    <div 
      id='Page132' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page132__Container'>
        <div>
          <p>
            <b className='Page__Text Page132__Title--Font'>
              Diana: Supervisora de loja / Boleira - Kobrasol
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Começo dizendo que quando sentes fé as coisas acontecem em nossas vidas, não importa se vai demorar um pouco mas Deus age na hora certa. Eu pedi a ele uma profissão e fui abençoada por estar fazendo os meus bolinhos que tanto amo e faço com muito carinho. Nunca imaginei na minha vida tanto senti tanto amor. Me emociono em falar de pensar que há 5 anos quando comecei na Casa de Bolos achei que não conseguiria. Mas tive apoio de pessoas que acreditaram em mim  e me incetivaram, que eu poderia sim, ir além, ir mais longe. Sentimento de muita gratidão por tudo até aqui e por tudo que está por vir e que sejam de muitas bençãos. 
          </p>
        </div>
        <div className='Page132__Content__Container'>
          <div className='Page132__Img--Align'>
            <img className='Page132__Img' src={cdb132} alt='' />
          </div>
          <div className='Page132__Text__Container'>
            <p className='Page__Text Page132__Text'>
              “Com todo o meu carinho!”            
            </p><br/>
            <p className='Page__Text Page132__Text--B'>
              - Diana
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={132} />
        </div>
      </div>
    </div>
  );
}