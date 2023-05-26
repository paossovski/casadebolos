import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb133 from '../../images/cdb_133.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page133 = () => {
  return(
    <div 
      id='Page133' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page133__Container'>
        <div>
          <p>
            <b className='Page__Text Page133__Title--Font'>
              Jacqueline: Supervisora de loja – Conselheiro Mafra
            </b>
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            Eu sou a Jaque, sou casada  e tenho um filho. Sempre gostei de lidar com o público e principalmente na área de vendas.  A casa de bolos surgiu como uma grande oportunidade e também como um grande desafio,  pois era tudo muito novo na minha vida. Participei de treinamentos na Central da Franquia  para me capacitar para desempenhar minha função. Estou desde o início na inauguração da primeira Casa de Bolos conhecida como Centro 01. Conheço todos os vizinhos e me dou  bem com todos e gosto muito de conversar. Neste tempo me relacionei com várias funcionárias, sempre mantendo uma boa convivência de amizade e respeito. Na verdade é uma troca de experiência e sempre procuro amenizar conflitos. Faço com muita dedicação o atendimento aos clientes com muita simpatia e gentileza. O mais importante é ter amor pelo que faz.
          </p>
        </div>
        <div className='Page133__Content__Container'>
          <div className='Page133__Img--Align'>
            <img className='Page133__Img' src={cdb133} alt='' />
          </div>
          <div className='Page133__Text__Container'>
            <p className='Page__Text Page133__Text'>
              “Enfim, agradeço a Deus por tudo!”       
            </p><br/>
            <p className='Page__Text Page133__Text--B'>
              - Jacque
            </p>
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={133} />
        </div>
      </div>
    </div>
  );
}