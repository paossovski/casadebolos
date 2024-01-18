import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page85 = () => {
  return(
    <div 
      id='Page85' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page85__Container'>
        <p className='Page__Text Page__Line--Height'>
          No entanto tivemos um problema de uso indevido do benefício e ele foi suspenso, sob condições de ser revisto após ato solicitado em reunião por diversas ocasiões. O funcionário pode comprar bolos e o mesmo será descontado na folha de pagamento.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Obs: essa compra deverá ser lançada no sistema, como venda a prazo e somente a supervisão poderá dar baixa nessa compra.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Mas posso comprar e lançar no sistema, em outro dia eu pago? NÃO, uma vez lançado, somente a supervisão pode dar baixa.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>PARENTES E CONHECIDOS:</b> Em caso de visitas inesperadas na seu ambiente de trabalho, atenda lá na área de atendimento e seja breve, não está autorizado a entrada dessas visitas nas dependências da loja.
        </p><br/><br/><br/><br/>
        <h3 className='Page__Text Page85__Text--Align'>
          TESTE DE NOVOS COLABORADORES
        </h3><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Quando um novo funcionário é contratado, no momento da entrevista avisamos que a pessoa passará por um dia de teste, para que se tenha uma base de seus conhecimentos e para que essa  possível futura funcionária conheça nossas tarefas e se identifique com nosso produto e trabalho, e queira continuar. Neste dia de testes é pago apenas o valor do vale transporte e horas trabalhados. Quando. O Funcionário receberá uniforme provisório, mas não poderá levar para casa, pois não sabemos ainda se retornará. Deve assinar o TERMO DE TESTE e o TERMO DE COMPROMISSO DE CONFIDENCIALIDADE DE RECEITA.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={85} />
        </div>
      </div>
    </div>
  );
}