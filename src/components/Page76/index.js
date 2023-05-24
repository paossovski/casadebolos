import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb74 from '../../images/cdb_74.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page76 = () => {
  return(
    <div 
      id='Page76' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page76__Container'>
        <p className='Page__Text'>
          Coloque o papel no para-brisa do carro quando:
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          ●	Passar mais de 2 horas do carro estacionado ali e a pessoa não solicitou gentilmente que estacionária ali;<br/>
          ●	Não seja nosso cliente, apenas estacionou e foi para outro local;<br/>
          ●	Estacionou, e de forma arrogante deixou ali sem pedir, sem ser cliente e desdenhando de nossa postura de pedir gentilmente que seja breve ao estacionar ali.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Quando o cliente retorna ao carro e vê o papel geralmente ele reclama, e a atendente deve gentilmente avisar o quanto um carro estacionado ali na frente atrapalha o emprego dela, as vendas das lojas e se quiserem chorar e se emocionar é um excelente momento, podem chorar!
        </p><br/><br/>
        <img className='Page76__Img' src={cdb74} alt="" /><br/><br/><br/>
        <p className='Page__Text Page76__Text--Align'>
          <b className='Page76__Text--Font'>REDES SOCIAIS</b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>●	COLABORADORES DEVE CURTIR E COMENTAR NAS REDES SOCIAIS DAS LOJAS:</b> Recomendamos que todo funcionário que vem para uma entrevista de emprego já deve estudar a empresa, curtir as redes sociais para se inteirar do assunto e depois que é contratado deve seguir, comentar, e até indicar a empresa que trabalha nas redes sociais. Acompanhamos todos os funcionários em suas redes sociais e observamos seu comportamento.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={76} />
        </div>
      </div>
    </div>
  );
}