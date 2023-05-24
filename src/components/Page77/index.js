import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb75 from '../../images/cdb_75.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page77 = () => {
  return(
    <div 
      id='Page77' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page77__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>●	AVALIAR NO GOOGLE:</b> Orientamos e fazemos bom grado que o funcionário avalie de forma positiva sua empresa/loja e todas as demais no google. É simples e é positivo para a empresa e para entendermos que o funcionário está bem em estar empregado na Casa de Bolos.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>●	AUXILIEM O ENGAJAMENTO NAS REDES SOCIAIS – <span className='Page77__Text--Background'>PÁGINA FACEBOOK E   INSTAGRAM</span> –</b> Curtam, comentem e se possível, compartilhem.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          ●	Estimulem nossos clientes a marcar <b className='P-77'> @casadebolosfloripa</b> nas redes sociais. Disponibilizamos de bilhetinhos para as vendas de balcão. Cliente comprou um bolinho, atendente deve colar o recadinho colado (nele consta uma frase fofinha e nosso instagram).
        </p><br/><br/>
        <img className='Page77__Img' src={cdb75} alt="" /><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          ●	Para a loja de Curitiba vale o mesmo processo de estimular clientes a marcar <b className='Page77__Text--Background'>
          @casadeboloscuritibaoficial</b> nas redes sociais. Disponibilizam também dos bilhetinhos para vendas de balcão. Cliente comprou bolinho, atendente cola o recadinho.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={77} />
        </div>
      </div>
    </div>
  );
}