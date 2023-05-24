import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb11 from '../../images/cdb_11.jpg';
import cdb12 from '../../images/cdb_12.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page22 = () => {
  return(
    <div 
      id='Page22' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div>
        <div>
          <h1 className='Page22__Title'>
            NOSSOS TRABALHOS E AÇÕES SOCIAIS
          </h1><br/><br/>
          <p className='Page__Text Page__Line--Height'>
            Temos como segmento entregar-se; demonstrar dedicação a uma causa ou pessoa; doar-se à família. E nessa caminhada contamos com doações dos nossos queridos clientes. Ações simplesmente do coração que são feitas com muito amor e carinho! Nossos trabalhos sociais:
          </p><br/>
          <p className='Page__Text Page__Line--Height'>
            ●	&nbsp; Doação a Passarela da Cidadania;<br/>
            ●	&nbsp; Igrejas Credenciadas;<br/>
            ●	&nbsp; Contribuições com descontos ou entregas sem custo;<br/>
            ●	CURITIBA – Ação de doações para organização CIAF que cuida de crianças no contraturno escolar e Núcleo de Pastores de Curitiba para encontros e ações sociais;<br/>
            ●	&nbsp; Participamos de uma campanha chamada Ação de Graças da Casa de Bolos (durante um período, cada venda era destinada $1,00 para a campanha), tinha como intuito arrecadar $10.000,00 a contemplação ocorreu por sorteio em nível nacional e uma das nossas instituições indicadas, foi a  ganhadora. &nbsp;
            <b className='Page22__Text'>Segue fotos:</b>
          </p><br/><br/>
        </div>
        <div className='Page22__Img__Container'>
          <img className='Page22__Img' src={cdb11} alt="" />
          <img className='Page22__Img' src={cdb12} alt="" />
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={22} />
        </div>
      </div>
    </div>
  );
} 