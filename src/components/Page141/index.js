import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page141 = () => {
  return(
    <div 
      id='Page141' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page141__Container'>
        <p className='Page__Text Page__Line--Height'>
          Ufa! Você chegou até o fim da leitura. Obrigado por investir seu tempo em conhecimento.
          Esperamos que tenha feito uma leitura leve e excelente. Que tenha ficado mais claro quem somos, como funcionamos, o que produzimos, como entregamos e o que esperamos de cada colaboradora inserida na rede Casa de Bolos.
          Estamos à disposição para sanar quaisquer dúvidas existentes, sugestões, elogios e até mesmo críticas construtivas. Aprendemos e aperfeiçoamos diariamente nossos processos e contamos com todas nessa trajetória!
          E que seja um período de grande aprendizado profissional e pessoal para todos que passam por aqui. Conte conosco! <span role='img' aria-label=''>&#128420;</span>
        </p>
        <p className='Page__Text Page141__Text'>
          <b>
            “Com carinho, família Casa de Bolos Floripa e Curitiba!”
          </b>
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={141} />
        </div>
      </div>
    </div>
  );
}