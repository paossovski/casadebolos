import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb58 from '../../images/cdb_58.jpg';
import cdb59 from '../../images/cdb_59.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page55 = () => {
  return(
    <div 
      id='Page55' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page55__Container'>
        <div className='Page55__Img__Container'>
          <img className='Page55__Img Page55__Text--Margin' src={cdb58} alt="" />
          <img className='Page55__Img' src={cdb59} alt="" />
        </div><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>DICAS IMPORTANTES:</b><br/>
          <b>•</b>	Em caso de abelhas na loja (dentro ou fora do balcão): sabemos que podemos ter a presença de abelhas na loja:<br/>
          <b>•</b>	Não faça: espantar com a mão, com toalhas, com inseticida.<br/>
          <b>•</b>	Faça: Limpe bem a area de atendimento, após limpa passe um pano em toda a área com vinagre. Quando elas estiverem no balcão, colocar um limão fatiado ao meio com alguns cravos espetados, de forma escondida para espantar. Limpar o balcão internamente com vinagre.<br/> 
          <b>•</b>	No caso do aparecimento de baratas e formigas utilizamos como veneno a aplicação em forma de gel deste produto. Não adianta jogar agua quente e nem jogar inseticida, é preciso descobrir o caminho (esconderijo) e aplicar neste caminho uma pequena gotinha deste veneno em gel, que vem em forma de seringa. 
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>VALES TRANSPORTES:</b> Pagos semanalmente, sempre às terças-feiras. Valores retirados do caixa, no final do dia, comprovando através de vales assinados pelos colaboradores. (Observe se o colaborador teve compensações de horas ou feriados/atestados/faltas) e pague descontando estes dias. Não esqueça de lançar em despesas no sistema.
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>ANIVERSARIANTE DO DIA:</b> Tem direito em escolher um bolo de até $40,00. Podendo consumi-lo para confraternizar com a sua equipe do dia. Deve ser lançado como degustação do dia.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={55} />
        </div>
      </div>
    </div>
  );
}