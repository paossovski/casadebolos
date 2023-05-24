import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page19 = () => {
  return(
    <div 
      id='Page19' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page19__Container'>
        <h1 className='Page__Text Page19__Text'>CASA DE BOLOS CURITIBA – CENTRO</h1><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          O prédio foi inaugurado no ano de 1944. A construção foi um dos primeiros edifícios a se consolidar na área central. O edifício foi uma obra da Construtora Gutierrez, Paula & Munhoz. É considerado de uma arquitetura ímpar, com volumetria em formato de cunha, amplas esquadrias, nove pavimentos estruturados em concreto armado, servindo tipologias de uso misto, com acessos distintos para a parte residencial e comercial. O ponto alto do prédio está presente na estética da fachada, um conjunto de esquadrias de ferro levemente inclinadas, emolduradas por ressaltos volumétricos azulados, as quais transmitem a sensação de estarem prestes a cair, motivo pelo qual    recebeu o apelido peculiar de  “balança, mas não cai”.Um lugar cheio de histórias para contar:
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={19} />
        </div>
      </div>
    </div>
  );
}