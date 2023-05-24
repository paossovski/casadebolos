import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb14 from '../../images/cdb_14.jpg';
import cdb15 from '../../images/cdb_15.jpg';
import cdb16 from '../../images/cdb_16.jpg';
import cdb17 from '../../images/cdb_17.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page24 = () => {
  return(
    <div 
      id='Page24' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page24__Container'>
        <h1 className='Page__Text Page24__Text'>
          CURIOSIDADES CASA DE BOLOS
        </h1><br/><br/>
        <div className='Page24__Img__Container'>
          <img className='Page24__Img' src={cdb14} alt="" />
          <p className='Page__Text Page24__Img__Legend'>
            Você sabia que somos uma empresa com compromisso de até 2025 usar exclusivamente ovos sem ter galinhas confinadas. É possível fazer a diferença mesmo com gestos simples, como assumir uma postura de consumo mais responsável.
          </p>
        </div><br/><br/>
        <div className='Page24__Img__Container'>
          <img className='Page24__Img' src={cdb15} alt="" />
          <p className='Page__Text Page24__Img__Legend'>
            Adotamos atitudes que são favoráveis ao meio ambiente. E assim temos como opção a Bolobag ou Sacola Ecológica. Embalagem mais durável, prática e econômica, que pode ser utilizada nos mais variados locais.
          </p>
        </div><br/><br/>
        <div className='Page24__Img__Container'>
          <img className='Page24__Img' src={cdb16} alt="" />
          <div className='Page24__Legend__Container'>
          <p className='Page__Text Page24__Legend--Margin'>
            O descarte incorreto acaba ocasionando em contaminação de outros resíduos, podendo impossibilitar mecanicamente a triagem.
          </p>
          <div className='Page24__Text__Container'>
            <p className='Page__Text Page24__Text--Spacing'>
              Pode tirar o valor dos materiais ou direcionar os resíduos para o lugar errado.<br/><br/>
              O que podemos fazer para resolver isso é muito simples.
            </p>
            <img className='Page24__Img--Size' src={cdb17} alt="" />
          </div>
          </div>
        </div>
        <div className='Page24__Img__Container'>
          <p className='Page__Text Page24__Text--Margin'>
            Só precisamos destinar os materiais corretamente no dia correto e vocês têm todas essas informações no aplicativo Lixo Certo. São mais de 300 pontos de coleta cadastrados por Florianópolis-SC, além da coleta seletiva que você pode consultar no aplicativo lixo certo. 
          </p>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={24} />
        </div>
      </div>
    </div>
  );
}

