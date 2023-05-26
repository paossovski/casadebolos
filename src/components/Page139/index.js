import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb139 from '../../images/cdb_139.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page139 = () => {
  return(
    <div 
      id='Page139' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page139__Container'>
        <div>
          <p>
            <b className='Page__Text Page139__Title--Font'>
              Viviane: Boleira / Supervisora de loja – Curitiba
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Me chamo Viviane, mas todas me chamam de Vivi, há alguns anos atrás eu conheci o Murilo Bonucci, ele começou a trabalhar numa rádio aqui de Curitiba, da qual eu era muito fã e com o passar do tempo fomos ficando mais próximos, fizemos ações sociais juntos, festas surpresas, e inúmeros outros eventos.
            A vida seguiu seu curso, nos distanciamos, mas quando nos encontrávamos eu sempre ouvia: - Ainda vamos trabalhar juntos!!!!
            Certo dia, durante um encontro de amigos, conversamos sobre a vontade de ter uma Casa de Bolos em Curitiba, conversa despretensiosa, sem promessas e sem datas, mas Deus, providenciou tudo rapidamente pra que aquela conversa se transformasse em realidade. O bolo de fubá com goiabada me foi apresentado e eu logo me apaixonei.
            Tudo muito rápido, no auge da pandemia, cheios de medo, de dúvidas, mas com o desejo enorme de que tudo desse certo, e deu, e cá estamos nós, há dois anos adoçando encontros, reavivando memórias e espalhando amor em forma de bolo pela cidade.
          </p>
        </div>
        <div className='Page139__Content__Container'>
          <div className='Page139__Img--Align'>
            <img className='Page139__Img' src={cdb139} alt='' />
          </div>
          <div className='Page139__Text__Container'>
            <p className='Page__Text Page139__Text'>
              “Eu sou só gratidão, pelo reencontro, pelo chamado, pelas oportunidades e por poder colocar o melhor de mim em cada pedaço de bolo!”
            </p><br/>
            <p className='Page__Text Page139__Text--B'>
              - Vivi
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={139} />
        </div>
      </div>
    </div>
  );
}