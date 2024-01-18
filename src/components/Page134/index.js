import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb134 from '../../images/cdb_134.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page134 = () => {
  return(
    <div 
      id='Page134' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page134__Container'>
        <div>
          <p>
            <b className='Page__Text Page134__Title--Font'>
              Mariana: Auxiliar administrativa – Estreito
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Meu nome é Mariana, tenho 26 anos, dia 06 de outubro de 2022 enviei meu currículo pelo indeed para a empresa casas de bolo floripa e num belo dia estava indo as compras quando recebi uma ligação sendo chamada pra uma entrevista no dia 10, fiz a entrevista para a área de administração, foi tudo tranquilo dia 12 fiz um teste e na mesma semana numa sexta feira dia 14 recebi a mensagem que passei e tinha conseguido a vaga e começaria dia 17 e desde então estou aprendendo muitas coisas, compartilhando conhecimentos e a cada dia sendo uma pessoa melhor no local que eu trabalho, fui recebida muito bem pelas meninas, o local é incrível de trabalhar, o ânimo das pessoas, os carinhos, abraços, as brincadeiras, a parceria, a dedicação de cada uma na sua função, tudo é muito maravilhoso e ate aqui já com 1 mês na loja eu só poderia agradecer pela oportunidade, pelo meu reconhecimento que as outras pessoas tiveram de mim, pelo meu desempenho no trabalho no que eu faço todos os dias pra pode melhorar em algo e me dedicar ainda mais nas coisas e espero poder mostrar isso e muito mais pela frente.
          </p>
        </div>
        <div className='Page134__Content__Container'>
          <div className='Page134__Img--Align'>
            <img className='Page134__Img' src={cdb134} alt='' />
          </div>
          <div className='Page134__Text__Container'>
            <p className='Page__Text Page134__Text'>
              “Então muita gratidão a equipe!”          
            </p><br/>
            <p className='Page__Text Page134__Text--B'>
              - Mariana
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={134} />
        </div>
      </div>
    </div>
  );
}