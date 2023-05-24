import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb54 from '../../images/cdb_54.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page52 = () => {
  return(
    <div 
      id='Page52' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page52__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>PARCERIA UNIMED:</b> A promoção ainda existe, apenas tiramos a plaquinha, pois a franquia não nos permite deixar exposto outra marca no balcão. Funcionários da Unimed Grande Florianópolis, tem direito a 10% de descontos em compras feitas diretamente no balcão, mediante apresentação da carteirinha e preenchendo o cadastro. Esse desconto não é válido via delivery.
        </p><br/><br/>
        <img className='Page52__Img' src={cdb54} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>O SOM:</b> Deve ser ligado na abertura da loja e se manter audível até o final.  Usar o pen drive com a seleção da época, não podendo utilizar nenhum outro som. (ex Radio FM). Nenhum outro som é permitido nas lojas, nem na área de produção. 
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>VENTILADOR –</b> é proibido o uso de ventiladores na área de produção, no teto, no chão, em bancadas. Não é permitid devido a contaminação cruzada de alimentos. Proibido pela vigiância sanitária e pela franquia. Pode ser utilizado apenas na área de atendimento e na área de delivery (escritório) e espaço destinado a alimentação do funcionário caso este seja em local reservado da área de produção. 
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>MURAL DE INFORMAÇÕES:</b> é online, os comunicados se encontram no app Marqponto, na duvida consulte este local ou ligue para a Central de Atendimento. 
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>FECHAMENTO LOJA:</b> verifique sua loja, a maioria as 18h30, exceto as sextas - feiras e vespéras de feriado. Exceto Kobrasol, Curitiba Centro e Novo Mundo as 19h todos os dias. Fechar as portas em ponto ao horário estabelecido. Para fechar  com antecedência é necessário comunicar a Central de Atendimento e ter autorização da supervisão.
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>ÁGUA QUENTE NA PIA:</b>  Todos os dias após a finalização da  louça, a pessoa responsável pela limpeza, deve jogar uma panela de água quente nos ralos das pias da cozinha, devido  
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={52} />
        </div>
      </div>
    </div>
  );
}