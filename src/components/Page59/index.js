import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page59 = () => {
  return(
    <div 
      id='Page59' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page59__Container'>
        <p className='Page__Text Page__Line--Height'>
          Curitiba devido a sua distância das demais lojas, age de forma mais independente e não consta na nossa Central de Atendimento e nem ramal específico. Mas sempre que for necessário, colaboradoras entrarão em contato a supervisão (alocada em Florianópolis) para sanar dúvidas e orientá-las de como agir com as situações inusitadas ou apenas questionamentos simples mesmo.
        </p><br/><br/><br/>
        <p className='Page__Text Page59__Text--Align'>
          <b className='Page59__Text--Align'>ÁREA DE PRODUÇÃO</b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>NÃO É NÃO!</b><br/>
          <b>●</b>	NÃO PODEM SER TIRADAS fotos de dentro da loja no telefone pessoal.<br/>
          <b>●</b>	EMPRESTOU potes e/ou utensílios, devolva. Emprestar e não devolver é roubo. Não vale a pena! Faz falta para os demais e prejudica a produção.<br/>
          <b>●</b>	NÃO QUEIRA AGRADAR A AMIGOS E PARENTES passando mais cobertura, caprichando mais, além de desonesto, foge do nosso padrão e pode trazer problemas para toda uma equipe, por isso tudo deve ser pesado e seguido a receita padrão, para ser justo com todos.<br/>
          <b>● Não pode adaptar receitas, temos um padrão da franquia.</b><br/>
          <b>●	NÃO PODE CAIXAS DE MADEIRA E PAPELÃO NA ÁREA DE PRODUÇÃO PRÓXIMO A ALIMENTOS</b><br/>
          <b>●	Não sente nas lixeiras - não encoste nem por 1 segundo. Não é o lugar!</b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>PRODUÇÃO:</b> De acordo com cada loja, é planejada com a necessidade do dia em questão de quantidade, encomendas e demandas. Produzir e manter <b>CINCO</b> sabores <b>RENTÁVEIS</b> à disposição para venda. Acabou? Produza mais, mesmo que já tenha atingido a quantidade de bolos solicitado para a produção diária.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>BOLO DE MILHO DICA IMPORTANTE:</b> A produção desse bolo é um pouco complicadinha devido ao tempo, boleira, ao prozudir esse bolo você bate a massa, enforma e leva ao forno imediatamente. Essa massa não pode ficar descansando na forma antes de ir ao forno, quando tem esse tempo de descanso a milharina desce para o fundo da forma e certamente vai batumar esse bolo, perdendo totalmente a produção do bolo de milho.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={59} />
        </div>
      </div>
    </div>
  );
}